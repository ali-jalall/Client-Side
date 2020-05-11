<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Add</span> Category <i class='fas fa-plus'/></h5>"
      customHeader
    >
      <form class="pt-4" ref="categoryForm">
        <div class="form-row ">
          <div class="form-group col-md-6">
            <label>Category Name</label>
            <input
              required
              type="text"
              v-model="data.name"
              class="form-control"
            />
          </div>
          <div class="col-md-6 m-auto pt-3 text-center">
            <button
              type="submit"
              v-on:click="submitForm()"
              class="btn add-category"
            >
              Add Category
            </button>
          </div>
        </div>
      </form>
    </Widget>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      data: {
        name: "",
      },
    };
  },
  components: {},
  methods: {
    submitForm() {
      if (this.data.name === "") return;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.categoryForm,
      });
      this.$http
        .post(
          "http://localhost:5000/categories/add",
          this.data
        )
        .then(() => {
          this.data.name = "";
          loader.hide();
          this.$toasted.success("Category Added", {
            duration: 3000,
            position: "top-center",
            action: {
              text: "Ok",
            },
          });
        })
        .catch(() => {
          loader.hide();
          this.$toasted.error("Sorry it seems like there's an issue!", {
            duration: 3000,
            position: "top-center",
          });
        });
    },
  },
};
</script>
<style scoped>
.add-category {
  background-color: #002b49;
}

.add-category:hover {
  background-color: rgb(1, 31, 53);
}

.form-control:focus {
  border: 1px solid #25cbc5;
}
</style>
