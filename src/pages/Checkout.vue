<template>
  <div style="background-color: #F9FBFD">
    <NavBar />
    <div class="page-header page-header-small image">
      <div class="page-header-image" data-parallax="true"></div>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great company.</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round"> </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round"> </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round"> </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 m-auto ">
      <Widget
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
                <!-- <th>ADDRESS</th> -->
                <!-- <th>CITY</th> -->
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

const API_POST = "http://localhost:5000/orders";

export default {
  name: "Checkout",
  components: {
    NavBar,
    Footer
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      length: "getNumberOfCartProducts"
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    },
    products_ids() {
      return this.products.map(product => {
        return product._id;
      });
    },
    quantities () {
      return this.products.map(product => {
        return product.quantity
      })
    }
  },
  mounted() {
    console.log(this.products);
  },
  methods: {
    ...mapActions(["resetState", "removeProduct"]),
    removeProductById(e) {
      this.removeProduct(e.target.accessKey);
    },
    orderNow() {
      const username = this.$cookie.get("Username");
      const user_id = this.$cookie.get("user_id");
      const products_ids = this.products_ids;
      const quantities = this.quantities;
      const total_price = this.total;

      this.$http
        .post(API_POST + "/add", {
          username,
          user_id,
          products_ids,
          total_price,
          quantities
        })
        .then(() => {
          this.resetState();
          // this.$router.push({ path: '/products' })
          /**
           * TODO: Show model to confirm sending the order and redirect to products page || Home
           */
        })
        .then(err => {
          /**
           * TODO: Show model to decline order with err
           */
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.image {
  background-image: url("../assets/img/bg26.jpg");
}
</style>
