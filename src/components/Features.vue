<template>
  <div class="main">
    <div class="section" ref="features">
      <div class="container">
        <h2 class="section-title">Our Last Products</h2>
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-lg-3 col-md-12"
              v-for="(product, index) in products.slice(0, 4)"
              :key="index"
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
            <div class="col-md-6 m-auto text-center">
              <b-link
                to="/products"
                rel="tooltip"
                class="btn btn-primary btn-round px-5"
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
</template>

<script>
const API_GET = "hhttp://localhost:5000/products";

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


</style>
