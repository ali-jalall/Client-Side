<template>
  <div class="cart">
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </p>
    <table
      class="table table-borderless table-striped font"
      v-show="products.length"
    >
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.name }}</td>
          <td>${{ p.price }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td>
            <b>${{ total }}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <b-button
        v-show="products.length"
        class="button is-primary"
        @click="checkout"
      >
        Checkout
      </b-button>
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "cartProducts",
      length: "getNumberOfCartProducts"
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    }
  },
  methods: {
    checkout() {
      alert("Pay us $" + this.total);
    }
  }
};
</script>

<style scoped>
.font {
  font-family: "Roboto", sans-serif;
}

.header-font {
  font-family: "Montserrat", sans-serif;
}

td {
  padding: 16px 10px;
}

.button {
  background-color: #8be2bc;
  border: none;
  color: black;
}

.btn-secondary:hover {
  color: black !important;
  border: none !important;
  background-color: #85d6b3 !important;
  box-shadow: none !important;
}
</style>
