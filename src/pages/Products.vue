<template>
  <div>
    <NavBar />
    <div class="p-2">
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav" style="background-color: #8be2bc;">
          <b-nav
            card-header
            tabs
            justified
            class="float-right"
            style="background-color: #8be2bc"
          >
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item
              v-bind:active="tab === 1"
              v-on:click="tab = 1"
              @click="changeCategory"
              to="/products"
              exact
              >All</b-nav-item
            >
            <b-nav-item
              v-bind:active="tab === 2"
              v-on:click="tab = 2"
              @click="changeCategory"
              to="/products"
              exact
              >Handmade</b-nav-item
            >
            <b-nav-item
              v-bind:active="tab === 3"
              v-on:click="tab = 3"
              @click="changeCategory"
              to="/products"
              exact
              >Rustic</b-nav-item
            >
          </b-nav>
        </b-card-header>

        <b-row>
          <b-col lg="2">
            I am left ... Cool
          </b-col>
          <b-col lg="10">
            <div class="pt-3">
              <b-card
                v-for="product in result"
                :key="product.id"
                :img-src="product.product_img"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-4 pb-3 mx-3 main-card"
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
                <b-button
                  class="mt-3 product-details font"
                  @click="productDetails"
                  :accesskey="product.id"
                >
                  <i class="fas fa-info-circle" />
                  More Info</b-button
                >
                <b-button
                  @click="addProductToCart"
                  :accesskey="product.id"
                  class="add-to-cart w-100 font"
                >
                  <i class="fas fa-cart-plus" /> Add to Cart
                </b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { mapActions } from "vuex";
// const faker = require("faker");
// const API_POST = "http://localhost:3000/products/add";
const API_GET = "http://localhost:3000/products";

export default {
  name: "Products",
  data() {
    return {
      result: [],
      tab: null
    };
  },
  components: {
    NavBar,
    Footer
  },
  methods: {
    ...mapActions([ 'addToCart' ]),
    addProductToCart(e) {
      this.currentUser
      ?
      this.$http
        .get(`${API_GET}/p/${e.target.accessKey}`)
        .then(({ data }) => {
          this.addToCart(data.product);
        })
      :
      alert('Noooo')
    },
    productDetails(e) {
      this.$router.push({ path: `/p/${e.target.accessKey}` });
    },
    changeCategory(e) {
      if (e.target.text === "All") {
        this.$router.push(`products`);
        this.$http
          .get(API_GET)
          .then(({ data }) => {
            if (!data) {
              // TODO: Show something to tell user 'There's no products'
              return;
            }
            this.result = data.result;
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        this.$router.push(`products/${e.target.text.toLowerCase()}`);
        this.$http
          .get(`${API_GET}/${e.target.text.toLowerCase()}`)
          .then(({ data }) => {
            if (!data) {
              // TODO: Show something to tell user 'There's no products'
              return;
            }

            this.result = data.products;
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  },
  mounted() {
    // for (let i = 0; i <= 20; i++) {
    //     let name = faker.commerce.productName();
    //     let price = faker.commerce.price();
    //     let description = faker.lorem.paragraph();
    //     let category = faker.commerce.productAdjective();
    //     let product_img = faker.image.imageUrl();
    //     console.log(product_img)

    //       let obj = { name, price, description, category, product_img };
    // axios.post(API_POST, obj).then(() => {
    this.$http
      .get(API_GET)
      .then(({ data }) => {
        this.result = data.result;
      })
      .catch(err => {
        console.log(err);
      });
    // });
    // }
  },
  computed: {
    currentUser () {
      return this.$cookie.get('Username') ? true : false
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");

.active {
  background-color: #6ebb9a !important;
  color: black !important;
}

.nav-tabs .nav-link {
  color: #000 !important;
}

.nav-tabs .nav-link:hover {
  color: rgb(87, 65, 65) !important;
}

.card-link {
  color: #000 !important;
}

.card-link:hover {
  color: rgb(70, 54, 54) !important;
}

.nav-tabs .nav-link {
  margin-right: 8px;
  margin-left: 20px;
  border: 0 !important;
}

.font {
  font-family: "Roboto", sans-serif;
  word-spacing: 0;
}

.product-title {
  font-family: "Montserrat", sans-serif;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.main-card {
  max-width: 20rem;
  max-height: 32.5rem;
  float: right;
  text-align: left;
  padding-bottom: 20px;
}

.product-price {
  float: right;
  margin-top: 23px;
}

.product-details {
  background-color: #8be2bc;
  border: none;
  color: black;
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

.add-to-cart {
  background-color: #8be2bc;
  color: black;
  border: 0;
  margin-top: 6px;
  /* margin-bottom: 8px; */
}
</style>
