<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Products</span> List</h5>"
      bodyClass="widget-table-overflow py-2"
      customHeader
    >
      <div class="table-responsive">
        <table class="table mb-0 requests-table">
          <thead>
            <tr class="text-muted">
              <th>IMAGE</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>DETAILS</th>
              <th>PRICE</th>
              <th>DATE</th>
              <th>ACTIONS</th>
              <!-- <th>STATUS</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product._id">
              <td>
                <img
                  :src="product.product_imgs[0]"
                  alt="product_img"
                  width="200px"
                />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.details }}</td>
              <td>$ {{ product.price }}</td>
              <td>{{ product.createdAt.slice(0, 10) }}</td>
              <td>
                <b-button
                  @click="removeProduct"
                  variant="danger"
                  :id="index"
                  :accesskey="product._id"
                  class="mr-1 p-1 px-3"
                >
                  <i class="fas fa-minus-circle"></i>
                </b-button>
                <b-button variant="info" class="p-1 px-3">
                  <i class="fas fa-edit"></i>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
  </div>
</template>

<script>
const API_GET = "http://localhost:5000/products";

export default {
  name: "ProductsList",
  data() {
    return {
      products: []
    };
  },
  methods: {
    removeProduct(e) {
      let _id = e.target.accessKey;
      this.$http.delete(`${API_GET}/p/${_id}`).then(({ data }) => {
        data.deleted ? this.products.splice(e.target.id, 1) : console.log(data)
      });
    }
  },
  mounted() {
    this.$http.get(API_GET).then(({ data }) => {
      this.products = data.result;
    });
  }
};
</script>
