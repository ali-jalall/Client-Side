<template>
  <div class="cart">
    <div v-show="!products.length" class="header-font text-center">
      <h4 class="text-center py-2"><strong>Your cart is empty!</strong></h4>
      <img
        class="mt-3 mb-4"
        src="../assets/img/empty.svg"
        alt="empty-cart"
        width="160px"
      > <br>
      <router-link class="ml-3" to="/products">Go shopping</router-link>
    </div>
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
          <b-button
            @click="removeProductById"
            :accessKey="p.id"
            class="remove-item"
          >
            <i class="fas fa-trash" />
          </b-button>
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
        class="button is-primary font"
        @click="checkout"
      >
        Checkout
      </b-button>
      <b-button v-show="products.length" class="clear-state font" @click="clearState">
        Empty Cart
      </b-button>
    </p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions([ 'resetState', 'removeProduct' ]),
    checkout() {
      alert("Pay us $" + this.total);
    },
    removeProductById (e) {
      this.removeProduct(e.target.accessKey)
    },
    clearState () {
      this.resetState()
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

.button:hover {
  background-color: #68bd98;
  border: none;
  color: black;
}

.clear-state {
  float: right;
  background-color: #fff !important;
  border: none !important;
  color: rgb(88, 75, 75);
}

.clear-state:hover {
  color: #000;
  float: right;
  background-color: rgb(253, 83, 83) !important;
}

.remove-item {
  background: transparent !important;
  color: rgb(255, 71, 71) !important;
  margin-top: 6px;
}

.remove-item:hover {
  color: rgb(255, 29, 29) !important;
}

.btn-secondary{
  color: black ;
  border: none ;
  background-color: #8be2bc;
  box-shadow: none ;
}
</style>
