<template>
  <nav
    class="navbar navbar-expand-lg bg-white fixed-top navbar-transparent"
    color-on-scroll="500"
  >
    <div class="container">
      <div class="navbar-translate">
        <a
          class="navbar-brand"
          href="../index.html"
          rel="tooltip"
          title=""
          data-placement="bottom"
          target="_blank"
          data-original-title="Designed by Invision. Coded by Creative Tim"
        >
          Now Ui Kit Pro
        </a>

        <button
          class="navbar-toggler toggled"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>

      <div
        class="collapse navbar-collapse show"
        data-color="orange"
        style=""
        data-nav-image="../assets/img/blurred-image-1.jpg"
      >
        <ul class="navbar-nav ml-auto" id="ceva">
          <li class="nav-item m-auto">
            <b-link class="nav-link nav-links" to="/">
              <p>Home</p>
            </b-link>
          </li>
          <li class="nav-item m-auto">
            <b-link class="nav-link nav-links" to="/products">
              <p>Products</p>
            </b-link>
          </li>
          <li class="nav-item m-auto">
            <b-link class="nav-link nav-links" to="/about">
              <p>About Us</p>
            </b-link>
          </li>
          <li class="nav-item m-auto">
            <b-link class="nav-link nav-links" to="/contact">
              <p>Contact Us</p>
            </b-link>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <b-link class="nav-link btn btn-primary" to="/signup">
              <p>Signup</p>
            </b-link>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <b-link class="nav-link btn btn-primary" to="/login">
              <p>Login</p>
            </b-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import Cart from "../components/Cart";
export default {
  name: "NavBar",
  components: {
    // Cart
  },
  data() {
    return {
      currentUser: null
    };
  },
  mounted() {
    let user = this.$cookie.get("Username");
    user ? (this.currentUser = user) : null;
  },
  methods: {
    logout() {
      this.$cookie.delete("X-auth");
      this.$cookie.delete("auth");
      this.$cookie.delete("Username");
      this.currentUser = null;
    }
  },
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    }
  }
};
</script>

<style scoped>
/* .navbar-dark .navbar-nav .nav-link {
  color: black !important;
} */
.logout:hover {
  color: red !important;
}

.nav-links {
  margin: 0 10px;
  font-size: 10pt !important;
}
</style>
