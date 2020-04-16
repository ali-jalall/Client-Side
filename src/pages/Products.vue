<template>
  <div>
    <NavBar />
    <Hero />
    <div class="section" >
      <div class="container" ref="formContainer">
        <h2 class="section-title">Find what you need</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="collapse-panel">
              <div class="card-body">
                <div class="card card-refine card-plain">
                  <div class="card-header" role="tab" id="headingTwo">
                    <h6>
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#collapseTwo"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Clothing

                        <i class="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="card-body">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            checked=""
                          />
                          <span class="form-check-sign"></span>
                          Casual Shirts
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-refine card-plain">
                  <div class="card-header" role="tab" id="headingThree">
                    <h6>
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#collapseThree"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Designer

                        <i class="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="card-body">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" />
                          <span class="form-check-sign"></span>
                          All
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" />
                          <span class="form-check-sign"></span>
                          Polo Ralph Lauren
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-refine card-plain">
                  <div class="card-header" role="tab" id="headingfour">
                    <h6>
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#collapsefour"
                        href="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        Colour

                        <i class="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapsefour"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingfour"
                  >
                    <div class="card-body">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" />
                          <span class="form-check-sign"></span>
                          Black
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
                v-for="product in products"
                :key="product._id"
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
                <!-- end card -->
              </div>
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

export default {
  name: "Products",
  data() {
    return {
      products: [],
      tab: null,
      isLoading: true,
      fullPage: false,
    };
  },
  components: {
    NavBar,
    Footer,
    Hero,
  },
  methods: {
    ...mapActions(["addToCart"]),
    // addProductToCart(e) {
    //   this.currentUser
    //     ? this.$http
    //         .get(`${API_GET}/p/${e.target.accessKey}`)
    //         .then(({ data }) => {
    //           this.addToCart(data.product);
    //         })
    //     : this.$refs["loginWarning"].show();
    // },
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
    changeCategory() {
      /**
       * Commented to be used when finish developing ...
       */
      // if (e.target.text === "All") {
      //   this.$router.push(`products`);
      //   this.$http
      //     .get(API_GET)
      //     .then(({ data }) => {
      //       if (!data) {
      //         // TODO: Show something to tell user 'There's no products'
      //         return;
      //       }
      //       this.result = data.result;
      //     })
      //     .catch(err => {
      //       console.error(err);
      //     });
      // } else {
      //   this.$router.push(`products/${e.target.text.toLowerCase()}`);
      //   this.$http
      //     .get(`${API_GET}/${e.target.text.toLowerCase()}`)
      //     .then(({ data }) => {
      //       if (!data) {
      //         // TODO: Show something to tell user 'There's no products'
      //         return;
      //       }
      //       this.result = data.products;
      //     })
      //     .catch(err => {
      //       console.error(err);
      //     });
      // }
    },
  },
  mounted() {
    /**
     * Commented to be used when finish developing ...
     */
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
    });
    this.$http
      .get(API_GET)
      .then(({ data }) => {
        this.products = data.result;
        loader.hide()
      })
      .catch(() => {
        loader.hide()
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
</style>
