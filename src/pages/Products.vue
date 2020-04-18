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
                <div
                  class="card card-refine card-plain"
                  @click="changeCategory"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <b-link
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
                <!-- <div class="card card-refine card-plain"> <b-link class="text-primary text-left" style="font-size: 14pt;"> Travel </b-link></div> -->
                <!-- <div class="card card-refine card-plain"> <b-link class="text-primary text-left" style="font-size: 14pt;"> Accessories </b-link></div> -->
              </div>
            </div>
          </div>
          <b-modal ref="loginWarning" hide-footer>
            <div class="d-block text-center">
              <h4 class="py-4">You Need To Login To add To Your Cart</h4>
            </div>
            <b-button to="/login" class="mt-3" variant="outline-success" block
              >Login</b-button
            >
            <b-button to="/signup" class="mt-2" variant="outline-warning" block
              >Signup</b-button
            >
          </b-modal>
          <div class="col-md-9">
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="(product, index) in paginatedData"
                :key="index"
              >
                <b-link @click="showProductDetails" :accesskey="product._id">
                  <div
                    class="card card-product card-plain"
                    :accesskey="product._id"
                  >
                    <div class="card-image" :accesskey="product._id">
                      <img
                        :src="product.product_imgs[0]"
                        height="250px"
                        alt="product_image"
                        :accesskey="product._id"
                      />
                    </div>
                    <div class="card-body" :accesskey="product._id">
                      <h4
                        class="card-title product-title"
                        :accesskey="product._id"
                      >
                        {{ product.name }}
                      </h4>
                      <p
                        class="card-description product-description"
                        :accesskey="product._id"
                      >
                        {{ product.details }}
                      </p>
                      <div class="card-footer" :accesskey="product._id">
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
                          @click="addProductToCart"
                          class="btn btn-primary mr-3"
                        >
                          Add to Cart &nbsp;<i
                            class="now-ui-icons shopping_cart-simple"
                          ></i>
                        </button>
                        <b-button
                          :accesskey="product._id"
                          class="btn btn-outline-primary text-center"
                          @click="showProductDetails"
                        >
                          Details
                        </b-button>
                      </div>
                    </div>
                  </div>
                </b-link>
              </div>
            </div>
            <div class="text-center">
            <button class="mr-2 btn btn-round btn-outline-primary" :disabled="pageNumber==0" @click="prevPage">
              <i class="fas fa-arrow-left" />
            </button>
            <button class="ml-2 btn btn-round btn-outline-primary" :disabled="pageCount === this.paginatedData.length" @click="nextPage">
              <i class="fas fa-arrow-right" />
            </button>
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

const API_GET = "http://localhost:5000/products";
const API_GET_CATEGORIES = "http://localhost:5000/categories";

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
  props: {
    listData: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  components: {
    NavBar,
    Footer,
    Hero,
  },
  methods: {
    ...mapActions(["addToCart"]),
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    addProductToCart(e) {
      this.currentUser
        ? this.$http
            .get(`${API_GET}/p/${e.target.accessKey}`)
            .then(({ data }) => {
              this.addToCart(data.product);
            })
        : this.$refs["loginWarning"].show();
    },
    showProductDetails(e) {
      this.$router.push({ path: `/p/${e.target.accessKey}` });
    },
    changeCategory(e) {
      if (e.target.text === "All") {
        this.$http
          .get(API_GET)
          .then(({ data }) => {
            if (!data) {
              // TODO: Show something to tell user 'There's no products'
              return;
            }
            this.products = data.products;
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.$http
          .get(`${API_GET}/${e.target.text}`)
          .then(({ data }) => {
            console.log(data);
            if (!data) {
              // TODO: Show something to tell user 'There's no products'
              return;
            }
            this.products = data.products;
          })
          .catch((err) => {
            console.error(err);
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
