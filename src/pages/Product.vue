<template>
  <div>
    <NavBar />
    <div class="mt-2 mb-5 p-2">
      <b-card
        style="position: relative;"
        :img-src="product.product_img"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-title class="product-title">
          {{ product.name }}
        </b-card-title>
        <b-card-text class="product-category font">
          {{ product.category }}
        </b-card-text>
        <b-card-text class="product-description font">
          {{ product.description }}
        </b-card-text>
        <b-card-text class="product-price font">
          <strong>${{ product.price }}</strong>
        </b-card-text>
        <b-button class="add-to-cart font">
          <i class="fas fa-cart-plus" />
          Add to Cart</b-button
        >
      </b-card>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const API_GET = "http://localhost:3000/products";

export default {
  name: "Product",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.$http
      .get(`${API_GET}/p/${this.$route.params.id}`)
      .then(({ data }) => {
        this.product = data.product;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");

.card-img-left {
  width: 30vw !important;
  height: 70vh !important;
}

.font {
  font-family: "Roboto", sans-serif;
  word-spacing: 0;
}

.product-title {
  font-family: "Montserrat", sans-serif;
}

.add-to-cart {
  margin: 10px;
  position: absolute;
  padding: 10px 0;
  width: 67.7%;
  right: 0;
  bottom: 0;
}

.product-price {
  position:absolute;
  right: 20px;
  font-size: 20pt;
  bottom: 60px;
  margin-top: 23px;
}

.btn-secondary {
  color: black !important;
  border: none;
  background-color: #8be2bc !important;
  box-shadow: none !important;
}

.btn-secondary:hover {
  color: black !important;
  border: none;
  background-color: #85d6b3 !important;
  box-shadow: none !important;
}

</style>
