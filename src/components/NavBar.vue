<template>
  <div class="main">
    <nav
      class=""
      :class="
        fixedTop
          ? 'fixed-top navbar navbar-expand-lg bg-white navbar-transparent'
          : 'navbar navbar-expand-lg bg-white navbar-absolute navbar-transparent'
      "
      color-on-scroll="500"
    >
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href=""
            title=""
            data-placement="bottom"
          >
            Beta Vibes
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
        <b-modal id="cartModel" title="Cart Products" ok-only>
          <Cart />
        </b-modal>
        <div
          class="collapse navbar-collapse show"
          data-color="orange"
          style=""
          data-nav-image="../assets/img//blurred-image-1.jpg"
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
              <b-link class="nav-link btn login" to="/login">
                <p>Login</p>
              </b-link>
            </li>
            <li class="nav-item m-auto" v-if="currentUser">
              <b-link class="nav-link nav-links" @click="showCart">
                <p>
                  <span style="font-size: 16pt;">{{ itemsInCart }}</span>
                  <i class="fas fa-shopping-cart" style="font-size: 18pt;" />
                </p>
              </b-link>
            </li>
            <li class="nav-item m-auto" v-if="currentUser">
              <b-link
                class="nav-link nav-links text-center"
                @click="userProfile"
              >
                <i class="fas fa-user" style="font-size: 18pt;"></i>
              </b-link>
            </li>
            <li class="nav-item" v-if="currentUser">
              <b-link class="nav-link btn btn-danger" @click="logout">
                <p>logout</p>
              </b-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  components: {
    Cart,
  },
  props: ["fixedTop"],
  data() {
    return {
      currentUser: null,
    };
  },
  mounted() {
    let user = this.$cookie.get("Username");
    user ? (this.currentUser = user) : null;
  },
  methods: {
    ...mapActions([ 'resetState' ]),
    logout() {
      this.$cookie.delete("X-auth");
      this.$cookie.delete("auth");
      this.$cookie.delete("Username");
      this.$cookie.delete("user_id");
      this.currentUser = null;
      this.resetState()
    },
    showCart() {
      this.$bvModal.show("cartModel");
    },
    userProfile() {
      let user_id = this.$cookie.get("user_id");
      this.$router.replace({ path: `/u/${user_id}` });
    },
  },
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.logout:hover {
  color: red !important;
}

.nav-links {
  margin: 0 10px;
  font-size: 10pt !important;
}

.modal-content {
  border-bottom: none !important;
  padding: 16px !important;
}

.login {
  border: 3px solid #F96B3D;
  padding: 8px 20px !important;
  background-color: transparent;
}

.login:hover {
  border: 3px solid transparent;
  padding: 8px 20px !important;
  background-color: #F96B3D;
}
</style>
