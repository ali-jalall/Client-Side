<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Categories</span> List</h5>"
      bodyClass="widget-table-overflow py-2"
      customHeader
    >
      <div class="table-responsive" ref="categoryList">
        <table class="table mb-0 requests-table">
          <thead>
            <tr class="text-muted">
              <th>NAME</th>
              <th></th>
              <th>PRODUCTS</th>
              <th></th>
              <th>DATE</th>
              <th></th>
              <th>ACTIONS</th>
              <!-- <th>STATUS</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category._id">
              <td>{{ category.name }}</td>
              <td></td>
              <td>{{ category.products.length }}</td>
              <td></td>
              <td>{{ category.createdAt.slice(0, 10) }}</td>
              <td></td>

              <td>
                <b-button
                  @click="removeProduct"
                  variant="danger"
                  :id="index"
                  :accesskey="category._id"
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
const API_GET = "http://localhost:5000/categories";

export default {
  name: "CategoriesList",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    removeProduct(e) {
      let _id = e.target.accessKey;
      this.$http.delete(`${API_GET}/${_id}`).then(({ data }) => {
        console.log(data);
        data.deleted
          ? this.categories.splice(e.target.id, 1)
          : console.log({ deleted: true });
      });
    },
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.categoryList,
    });
    this.$http.get(API_GET).then(({ data }) => {
      this.categories = data.categories;
      loader.hide();
    });
  },
};
</script>
