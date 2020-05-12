<template>
  <div>
    <Widget
      ref="userForm"
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Add</span> Customer <i class='fas fa-plus'/></h5>"
      customHeader
    >
      <form class="pt-4">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Customer Name</label>
            <input
              type="text"
              v-model="userData.username"
              class="form-control"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Email</label>
            <input type="text" v-model="userData.email" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-8">
            <label>Password</label>
            <input
              type="password"
              v-model="userData.password"
              class="form-control"
            />
          </div>
          <div class="form-group col-md-4">
            <label>Phone Number</label>
            <input
              type="text"
              v-model="userData.phone_number"
              class="form-control"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Age</label>
            <input type="number" v-model="userData.age" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>City</label>
            <input type="text" v-model="userData.city" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label>Address</label>
            <input
              type="text"
              v-model="userData.address"
              class="form-control"
            />
          </div>
        </div>

        <button type="submit" v-on:click="submitFile()" class="btn add-product">
          Add Customer
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
      fullPage: 'null',
      userData: {
        username: "",
        email: "",
        password: "",
        phone_number: "",
        address: "",
        city: "",
        age: 0,
      },
    };
  },
  components: {},
  methods: {
    submitFile() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.userForm,
      });
      this.userData.age = Number(this.userData.age);
      this.$http
        .post(
          "http://localhost:5000/users/add",
          this.userData
        )
        .then((data) => {
          console.log(data)
          this.resetData();
          loader.hide();
          this.$toasted.success("Customer Added", {
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
    resetData() {
      this.userData.username = "";
      this.userData.email = "";
      this.userData.password = "";
      this.userData.phone_number = "";
      this.userData.address = "";
      this.userData.city = "";
      this.userData.age = 0;
    },
  },
};
</script>

<style scoped>
.add-product {
  background-color: #002b49;
}

.add-product:hover {
  background-color: rgb(1, 31, 53);
}

.form-control:focus {
  border: 1px solid #25cbc5;
}
</style>
