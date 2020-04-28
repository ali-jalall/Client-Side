<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Add</span> Product <i class='fas fa-plus'/></h5>"
      customHeader
    >
      <form class="pt-4" ref="productForm">
        <div class="row pb-3">
          <div class="col-md-6">
            <b-form-file
              :file-name-formatter="formatNames"
              multiple
              v-model="files"
              :state="Boolean(files[0])"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <br />
          </div>
          <div class="col-md-6">
            <div class="large-12 medium-12 small-12 cell">
              <div v-for="(file, key) in files" :key="key" class="file-listing">
                {{ file.name }}
                <span class="remove-file" v-on:click="removeFile(key)"
                  >Remove</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Product Name</label>
            <input required type="text" v-model="name" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>Price</label>
            <input required type="text" v-model="price" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-8">
            <label>Details</label>
            <input
              required
              type="text"
              v-model="details"
              class="form-control"
            />
          </div>
          <div class="form-group col-md-4">
            <label>Category</label>
            <select required class="form-control" v-model="category">
              <option>Home</option>
              <option>Roof</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <button type="submit" v-on:click="submitFile()" class="btn add-product">
          Add Product
        </button>
      </form>
    </Widget>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      price: 0,
      category: "",
      details: "",
      files: [],
    };
  },
  components: {},
  methods: {
    submitFile() {
      if (!this.checkData()) return 
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.productForm,
      });
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append(`image`, file);
      });
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("details", this.details);
      formData.append("category", this.category);
      this.$http
        .post("https://tranquil-everglades-67262.herokuapp.com/products/add", formData, {
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.resetData();
          loader.hide();
          this.$toasted.success("Product Added", {
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
    removeFile(key) {
      this.files.splice(key, 1);
    },
    formatNames(files) {
      if (files.length === 1) {
        return files[0].name;
      } else {
        return `${files.length} files selected`;
      }
    },
    resetData() {
      this.name = "";
      this.category = "";
      this.details = "";
      this.price = 0;
      this.files = [];
    },
    checkData () {
      if (this.name === '' || this.category === ""||
      this.details === ""||
      this.price === 0||
      this.files === []) return false
      return true
    }
  },
};
</script>

<style scoped>
.form-control:focus {
  border: 1px solid #25cbc5;
}

.form-control {
  border-radius: 20px;
}

.form-group .form-control,
.input-group .form-control {
  padding: 12px 18px;
}

input[type="file"] {
  position: absolute;
  top: -500px;
}

div.file-listing {
  width: 200px;
}

span.remove-file {
  color: red;
  cursor: pointer;
  float: right;
}

.add-product {
  background-color: #002b49;
}

.add-product:hover {
  background-color: rgb(1, 31, 53);
}
</style>
