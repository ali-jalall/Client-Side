<template>
  <div>
    <NavBar />
    <Hero />
    <div class="section">
      <div class="container" ref="formContainer">
        <h2 class="section-title">Find what you need</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="collapse-panel">
              <div class="card-body pl-0" style="padding-top: 50px;">
                <div class="card card-refine card-plain">
                  <b-link
                    @click="changeCategory"
                    to="/products"
                    :replace="$route.path !== '/products'"
                    :append="$route.path === '/products'"
                    :class="$route.path === `/products` ? 'active-link' : ''"
                    class="text-primary text-left"
                    style="font-size: 14pt;"
                    >All</b-link
                  >
                </div>
                <div
                  class="card card-refine card-plain"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <b-link
                    @click="changeCategory"
                    :to="category.name"
                    :replace="$route.path !== '/products'"
                    :append="$route.path === '/products'"
                    :class="
                      $route.path === `/products/${category.name}`
                        ? 'active-link'
                        : ''
                    "
                    class="text-primary text-left"
                    style="font-size: 14pt;"
                    >{{ category.name }}</b-link
                  >
                </div>
              </div>
            </div>
          </div>
          <b-modal
            title="Cart"
            ref="loginWarning"
            ok-only
            ok-variant="secondary"
            ok-title="Cancel"
          >
            <div class="d-block text-center">
              <h4 class="py-3">You need to Register</h4>
            </div>
            <div class="text-center">
              <b-button
                to="/login"
                class="mt-2 mr-3 btn btn-round btn-outline-primary"
                >Login</b-button
              >
              <b-button to="/signup" class="mt-2 ml-3 btn btn-round btn-primary"
                >Signup</b-button
              >
            </div>
          </b-modal>
          <div class="col-md-9">
            <div class="row" ref="products" v-if="products.length">
              <div
                class="col-lg-4 col-md-6"
                v-for="(product, index) in paginatedData"
                :key="index"
              >
                <b-link >
                  <div
                    class="card card-product card-plain"
                    
                  >
                    <div class="card-image" >
                      <img
                        :src="product.product_imgs[0]"
                        height="250px"
                        alt="product_image"
                        
                      />
                    </div>
                    <div class="card-body" >
                      <h4
                        class="card-title product-title"
                        
                      >
                        {{ product.name }}
                      </h4>
                      <p
                        class="card-description product-description"
                        
                      >
                        {{ product.details }}
                      </p>
                      <div class="card-footer" >
                        <div class="price-container">
                          <span class="price"> € {{ product.price }} </span>
                        </div>

                        <button
                          class="btn btn-danger btn-neutral btn-icon btn-round pull-right"
                          rel="tooltip"
                          title=""
                          data-placement="left"
                          data-original-title="Remove from wishlist"
                        >
                          <i class="now-ui-icons ui-2_favourite-28"></i>
                        </button>
                      </div>
                      <div class="text-center mt-3">
                        <button
                          :accesskey="product._id"
                          @click="addProduct"
                          class="btn btn-primary mr-3"
                        >
                          Add to Cart &nbsp;<i
                            class="now-ui-icons shopping_cart-simple"
                          ></i>
                        </button>
                        <b-button
                          :accesskey="product._id"
                          class="btn btn-outline-primary text-center"
                          @click="showDetails"
                        >
                          Details
                        </b-button>
                      </div>
                    </div>
                  </div>
                </b-link>
              </div>
            </div>
            <div class="text-center" v-if="products.length">
              <button
                class="mr-2 btn btn-round btn-outline-primary"
                :disabled="pageNumber == 0"
                @click="prevPage"
              >
                <i class="fas fa-arrow-left" />
              </button>
              <button
                class="ml-2 btn btn-round btn-outline-primary"
                :disabled="this.paginatedData.length < 6"
                @click="nextPage"
              >
                <i class="fas fa-arrow-right" />
              </button>
            </div>
            <div class="text-center" v-else>
              <img src="../assets/img/packet.png" alt="empty-box" /> <br />
              <h3><strong class="text-center">No Products</strong></h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { mapActions } from "vuex";

const API_GET = "https://tranquil-everglades-67262.herokuapp.com/products";
const API_GET_CATEGORIES = "https://tranquil-everglades-67262.herokuapp.com/categories";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      tab: null,
      categories: [],
      pageNumber: 0,
    };
  },
  components: {
    NavBar,
    Footer,
    Hero,
  },
  methods: {
    ...mapActions(["addToCart"]),
    nextPage() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.products,
      });
      this.pageNumber++;
      loader.hide();
    },
    prevPage() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.products,
      });
      this.pageNumber--;
      loader.hide();
    },
    addProduct(e) {
      this.currentUser
        ? this.$http
            .get(`${API_GET}/p/${e.target.accessKey}`)
            .then(({ data }) => {
              this.addToCart(data.product);
            })
        : this.$refs["loginWarning"].show();
    },
    showDetails(e) {
      this.$router.push({ path: `/p/${e.target.accessKey}` });
    },
    changeCategory(e) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.products,
      });
      if (e.target.text === "All") {
        this.$http
          .get(API_GET)
          .then(({ data }) => {
            if (data.errMsg === "No Products") {
              loader.hide();
              return (this.products = []);
            }
            this.pageNumber = 0;
            this.products = data.result;
            loader.hide();
          })
          .catch(() => {
            loader.hide();
            this.$toasted.error("Sorry it seems like there's an issue!", {
              duration: 3000,
              position: "top-center",
            });
          });
      } else {
        this.$http
          .get(`${API_GET}/${e.target.text}`)
          .then(({ data }) => {
            if (data.errMsg === "No Products") {
              loader.hide();
              return (this.products = []);
            }
            this.pageNumber = 0;
            this.products = data.products;
            loader.hide();
          })
          .catch(() => {
            loader.hide();
            this.$toasted.error("Sorry it seems like there's an issue!", {
              duration: 3000,
              position: "top-center",
            });
          });
      }
    },
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.formContainer,
    });
    this.$http
      .get(API_GET)
      .then(({ data }) => {
        this.products = data.result;
        return this.$http.get(API_GET_CATEGORIES);
      })
      .then(({ data }) => {
        this.categories = data.categories;
        loader.hide();
      })
      .catch(() => {
        loader.hide();
        this.$toasted.error("Sorry it seems like there's an issue!", {
          duration: 3000,
          position: "top-center",
        });
      });
  },
  computed: {
    currentUser() {
      return this.$cookie.get("Username") ? true : false;
    },
    pageCount() {
      let l = this.products.length,
        s = 6;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * 6,
        end = start + 6;
      return this.products.slice(start, end);
    },
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.product-title {
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
.page-header .page-header-image {
  position: static;
}

.active-link {
  color: white !important;
  background-color: #f96332 !important;
  padding: 6px 40px 6px 12px;
}

.active {
  background-color: #888;
  border-color: #888;
  color: #fff;
}


</style>
