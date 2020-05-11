<template>
  <div style="background-color: #F9FBFD">
    <NavBar />

    <b-modal
      id="locationModal"
      title="Plesae Complete Your data"
      ok-only
      ok-variant="secondary"
      ok-title="Cancel"
      no-close-on-backdrop
    >
      <form @submit.prevent="submitData" ref="dataContainer">
        <div
          class="form-group"
          :class="$v.phone.$error ? 'has-danger' : 'has-success'"
        >
          <label for="phone_number">Phone Number</label>
          <input
            v-model.trim="$v.phone.$model"
            ref="phone"
            class="form-control bg-white"
            :class="{ 'form-control-danger': $v.phone.$error }"
            id="phone_number"
            type="text"
          />
          <br />
        </div>
        <div
          class="form-group"
          :class="$v.city.$error ? 'has-danger' : 'has-success'"
        >
          <label for="city">City</label>
          <input
            v-model.trim="$v.city.$model"
            ref="city"
            class="form-control bg-white"
            :class="{ 'form-control-danger': $v.city.$error }"
            id="city"
            type="text"
          />
          <br />
        </div>
        <div
          class="form-group"
          :class="$v.address.$error ? 'has-danger' : 'has-success'"
        >
          <label for="address">Address</label>
          <input
            v-model.trim="$v.address.$model"
            ref="address"
            class="form-control bg-white"
            :class="{ 'form-control-danger': $v.address.$error }"
            id="address"
            type="text"
          />
          <br />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </b-modal>

    <div class="page-header page-header-small image">
      <div class="page-header-image" data-parallax="true"></div>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great company.</h1>
          <div class="text-center">
            <a href="#" class="btn btn-primary btn-icon btn-round"> </a>
            <a href="#" class="btn btn-primary btn-icon btn-round"> </a>
            <a href="#" class="btn btn-primary btn-icon btn-round"> </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 m-auto ">
      <Widget
        ref="orders"
        title="<h5 class='pt-3'><span class='fw-semi-bold '>Cart</span> Items</h5>"
        bodyClass="widget-table-overflow py-2"
        customHeader
      >
        <div class="table-responsive">
          <table class="table mb-0 requests-table" v-show="products.length">
            <thead>
              <tr class="text-muted">
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product._id">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>

                <td>
                  <b-button
                    @click="removeProductById"
                    variant="danger"
                    :accesskey="product._id"
                    class="mr-1 p-1 px-3"
                  >
                    <i class="fas fa-trash"></i>
                  </b-button>
                </td>
              </tr>
              <tr>
                <td><b>Total:</b></td>
                <td></td>
                <td></td>
                <td class="pl-3">
                  <b>${{ total }}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <b-button
            @click="orderNow"
            v-show="products.length"
            class="btn btn-primary float-right mx-4"
          >
            Order Now
          </b-button>
          <b-button
            v-show="products.length"
            class="btn btn-outline-danger float-right"
            @click="resetState()"
          >
            <i class="fas fa-trash"></i> Clear Cart
          </b-button>
        </div>
      </Widget>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { mapGetters, mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

const API_POST = "http://localhost:5000/orders";
const API_GET = "http://localhost:5000/users";

export default {
  name: "Checkout",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      phone: "",
      city: "",
      address: "",
    };
  },
  validations: {
    phone: {
      required,
      minLength: minLength(8),
    },
    city: {
      required,
      minLength: minLength(6),
    },
    address: {
      required,
      minLength: minLength(16),
    },
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      length: "getNumberOfCartProducts",
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    },
    products_ids() {
      return this.products.map((product) => {
        return product._id;
      });
    },
    quantities() {
      return this.products.map((product) => {
        return product.quantity;
      });
    },
  },
  methods: {
    ...mapActions(["resetState", "removeProduct"]),
    removeProductById(e) {
      this.removeProduct(e.target.accessKey);
    },
    async submitData() {
      // Validate data entered
      this.$v.$touch();
      // if !Valid ? return
      if (this.$v.$error) return;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.dataContainer,
      });
      try {
        const user_id = this.$cookie.get("user_id");
        const products_ids = this.products_ids;
        const quantities = this.quantities;
        const total_price = this.total;

        // We Assume that user changes his data eg: address, city, phone_number
        // We send request to update user
        const {
          data: { userupdated },
        } = await this.$http.patch(`${API_GET}/${user_id}`, {
          phone_number: this.phone,
          city: this.city,
          address: this.address,
        });

        // when updated we send request to create order
        const order = await this.$http.post(API_POST + "/add", {
          username: userupdated.username,
          user_id,
          products_ids,
          total_price,
          quantities,
        });

        loader.hide();
        this.$toasted.success("Your Order has been sent", {
          duration: 3000,
          position: "top-center",
          action: {
            text: "Ok",
            onComplete: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });

        this.$bvModal.hide("locationModal");
        this.resetState();
        setTimeout(() => {
          this.$router.push({ path: "products" });
        }, 3000);

        console.log(order);
      } catch (e) {
        this.$toasted.error("Sorry it seems like there's an issue!", {
          duration: 3000,
          position: "top-center",
        });
      }
    },
    orderNow() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.orders,
      });
      const user_id = this.$cookie.get("user_id");

      this.$bvModal.show("locationModal");
      this.$http
        .get(`${API_GET}/${user_id}`)
        .then(({ data }) => {
          loader.hide();
          this.phone = data.user.phone_number;
          this.city = data.user.city;
          this.address = data.user.address;
        })
        .catch(() => {
          loader.hide();
          this.$toasted.error("Sorry it seems like there's an issue!", {
            position: "top-center",
          });
        });
    },
  },
};
</script>
<style scoped>
.image {
  background-image: url("../assets/img/bg26.jpg");
}

.has-danger:after {
  content: "\ea53";
  color: #ff3636;
  padding-top: 30px;
}
.has-success:after {
  /* content: "\ea53"; */
  /* color: #ff3636; */
  padding-top: 30px;
}

.has-danger .form-control {
  border-color: #f67777;
  color: #ff3636;
  background-color: hsla(0, 0%, 87%, 0.1);
}
</style>
