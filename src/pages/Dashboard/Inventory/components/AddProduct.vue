<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Add</span> Product <i class='fas fa-plus'/></h5>"
      customHeader
    >
      <form class="pt-4">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Product Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>Price</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-8">
            <label>Details</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-4">
            <label>Category</label>
            <select class="form-control">
              <option>Home</option>
              <option>Roof</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" /> Check me out
              <span class="form-check-sign">
                <span class="check"></span>
              </span>
            </label>
          </div>
        </div>
        <div class="container">
          <div class="large-12 medium-12 small-12 cell">
            <label
              >Files
              <input
                type="file"
                id="files"
                ref="files"
                multiple
                v-on:change="handleFileUpload()"
              />
            </label>
            <div class="large-12 medium-12 small-12 cell">
              <div v-for="(file, key) in files" :key="key" class="file-listing">
                {{ file.name }}
                <span class="remove-file" v-on:click="removeFile(key)"
                  >Remove</span
                >
              </div>
            </div>
            <br />
            <button v-on:click="submitFile()">Submit</button>
            <div class="large-12 medium-12 small-12 cell">
              <button v-on:click="addFiles()">Add Files</button>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </Widget>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      files: [],
    };
  },
  components: {},
  methods: {
    handleFileUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    submitFile() {
      let formData = new FormData();
      this.files.forEach((file, index) => {
        formData.append(`files['${index}']`, file);
      });
      this.$http
        .post("http://localhost:5000/upload-images", formData, {
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("Success");
          this.files = '';
        })
        .catch(() => {
          console.log("Failure");
        });
    },
    addFiles() {
      this.$refs.files.click();
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
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

div.file-listing{
    width: 200px;
  }

  span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }
</style>
