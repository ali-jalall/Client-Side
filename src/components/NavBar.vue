<template>
  <div>
    <b-navbar class="py-3" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <div class="text-center" style="word-spacing: 1000px;">
          <strong style="font-size: 20pt" class="text-dark">BETA</strong><br />
          <em style="color: grey">Vibes</em>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item to="/" style="font-size: 15pt;" class="mx-4"
            >Home</b-nav-item
          >
          <b-nav-item to="/products" style="font-size: 15pt;" class="mx-4"
            >Products</b-nav-item
          >
          <b-nav-item to="#" style="font-size: 15pt;" class="ml-4"
            >About</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-nav-form class="mr-5">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

        <!-- <h5 :show="!!user">{{user}}</h5> -->
        <div v-if="!!user">
          <b-link to="/cart">
            <span style="font-size: 14pt;" class="mr-2"> {{ itemsInCart }}</span>
            <span class="icon">
              <i class="fa fa-shopping-cart mr-4" style="font-size: 16pt;"/>
            </span>
          </b-link>
          <b-link to="/profile">
            <i class="fas fa-user" style="font-size: 16pt; margin: 0 5px;" />
          </b-link>
          <b-link @click="logout" class="logout">
            <i class="fas fa-sign-out-alt ml-4 mr-3" style="font-size: 18pt" />
          </b-link>
        </div>

        <b-button v-if="!user" class="signup mx-2" to="/signup"
          >Signup</b-button
        >
        <b-button v-if="!user" to="/login" class="login mx-2">Login</b-button>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.$cookie.get("Username") ? (this.user = this.$cookie.get("Username")) : null;
  },
  methods: {
    logout() {
      this.$cookie.delete("X-auth");
      this.$cookie.delete("auth");
      this.$cookie.delete("Username");
      this.user = null;
    }
  },
  computed: {
    itemsInCart(){
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
  }
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}

a {
  color: black !important;
  text-decoration: none !important;
}

a:hover {
  color: rgb(87, 53, 53) !important;
}

.logout:hover {
  color: red !important;
}

.navbar-dark .navbar-nav .nav-link.active {
  color: red !important;
}

.navbar-toggler {
  background-color: #8be2bc;
  color: black;
}

.btn-secondary {
  color: black !important;
  border: none;
  background-color: #8be2bc !important;
  box-shadow: none !important;
}

.signup {
  background-color: #fff !important;
  color: black;
  padding: 6px 20px;
  border-radius: 1.6rem;
  border: 3px solid #8be2bc !important;
  transition: 0.5 all ease-in;
  font-size: 12pt;
  box-shadow: none !important;
}

.login {
  background-color: #8be2bc;
  color: black;
  border-radius: 1.6rem;
  padding: 8px 24px;
  border: none;
  transition: 0.5 all ease-in;
  font-size: 12pt;
}

.login:hover {
  background-color: rgb(94, 197, 152) !important;
  color: black;
}

.signup:hover {
  background-color: #8be2bc !important;
  color: black !important;
  /* border: 3px solid #8BE2BC !important; */
}
</style>
