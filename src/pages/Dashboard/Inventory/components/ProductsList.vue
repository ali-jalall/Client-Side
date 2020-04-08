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
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>SIZE</th>
              <th>DATE</th>
              <!-- <th>STATUS</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product._id">
              <td>{{ product.name }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.details }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.size }}</td>
              <td>{{ product.createdAt.slice(0, 10) }}</td>
              <!-- <td>
                <b-button
                  :variant="
                    product.status === 'Pending'
                      ? 'success'
                      : product.status === 'Declined'
                      ? 'danger'
                      : 'info'
                  "
                  class="p-1 px-3 btn-xs"
                >
                  {{ product.price }}
                </b-button>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
  </div>
</template>

<script>
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/products";

export default {
  name: "ProductsList",
  data() {
    return {
      products: []
    };
  },
  mounted () {
    this.$http
      .get(API_GET)
      .then(({ data }) => {
        this.products = data.result
      })
  }
};
</script>
