<template>
  <div class="main">
    <div class="section" ref="features">
      <div class="container">
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

          <div class="col-md-9">
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="product in products.slice(0, 6)"
                :key="product._id"
              >
                <b-link @click="productDetails" :accesskey="product._id">
                  <div
                    class="card card-product card-plain"
                    :accesskey="product._id"
                  >
                    <div class="card-image" :accesskey="product._id">
                      <img
                        :accesskey="product._id"
                        :src="product.product_imgs[0]"
                        height="250px"
                        alt="product_image"
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
                    </div>
                  </div>
                </b-link>

                <!-- end card -->
              </div>
              <div class="col-md-3 ml-auto mr-auto">
                <b-link
                  to="/products"
                  rel="tooltip"
                  class="btn btn-primary btn-round"
                  data-original-title=""
                  title=""
                >
                  See All...
                </b-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/products";

export default {
  name: "Features",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    productDetails(e) {
      this.$router.push({ path: `/p/${e.target.accessKey}` });
    },
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.features,
    });
    this.$http
      .get(API_GET)
      .then(({ data }) => {
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
</style>
