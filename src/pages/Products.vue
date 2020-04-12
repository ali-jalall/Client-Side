<template>
  <div>
    <NavBar />

    <Hero />

    <div class="section">
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
                v-for="product in products"
                :key="product._id"
              >
                <b-link @click="productDetails" :accesskey="product._id">
                  <div class="card card-product card-plain" :accesskey="product._id">
                    <div class="card-image" :accesskey="product._id">
                      <img
                        :src="product.product_img"
                        height="250px"
                        alt="product_image"
                        :accesskey="product._id"
                      />
                    </div>
                    <div class="card-body" :accesskey="product._id">
                      <h4 class="card-title product-title" :accesskey="product._id">
                        {{ product.name }}
                      </h4>
                      <p class="card-description product-description" :accesskey="product._id">
                        {{ product.description }}
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
// const API_GET = "https://tranquil-everglades-67262.herokuapp.com/products";
export default {
  name: "Products",
  data() {
    return {
      // products: [],
      products: [
        {
          name: "Polo Ralph Lauren",
          description:
            "Impeccably tailored in Italy from lightweight navy wool.",
          price: 300,
          product_img:
            "https://www.festivalclaca.cat/pics/b/2/28615_png-dress.png"
        },
        {
          name: "Tom Ford",
          description: "Immaculate tailoring is TOM FORD's forte",
          price: 879,
          product_img:
            "https://images-na.ssl-images-amazon.com/images/I/71ZQsK4mdJL._AC_UX342_.jpg"
        },
        {
          name: "Wooyoungmi",
          description: "Dark-grey slub wool, pintucked notch lapels.",
          price: 555,
          product_img:
            "data:image/jpeg;base64,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"
        },
        {
          name: "Thom Sweeney",
          description: "It's made from lightweight grey wool woven.",
          price: 680,
          product_img:
            "https://images-na.ssl-images-amazon.com/images/I/51vVr2VJMWL._AC_UX569_.jpg"
        },
        {
          name: "Kingsman",
          description: "Crafted from khaki cotton and fully canvassed.",
          price: 725,
          product_img:
            "https://www.hikoreanfashion.com/100945-thickbox_default/navyblue-100-cotton-mandarin-collar-pocket-long-sleeved-casual-shirts.jpg"
        },
        {
          name: "Boglioli",
          description: "Masterfully crafted in Northern Italy.",
          price: 699,
          product_img: "https://i.dlpng.com/static/png/119243_preview.png"
        },
        {
          name: "Polo Ralph Lauren",
          description:
            "Impeccably tailored in Italy from lightweight navy wool.",
          price: 300,
          product_img:
            "https://i2.wp.com/paristylebd.com/wp-content/uploads/2017/12/Untitled-1-1.jpg?fit=3544%2C3544&ssl=1"
        },
        {
          name: "Polo Ralph Lauren",
          description:
            "Impeccably tailored in Italy from lightweight navy wool.",
          price: 300,
          product_img:
            "https://pngriver.com/wp-content/uploads/2017/11/jents-Dress-Shirts-free-PNG-transparent-background-images-free-download-clipart-pics-C17DS106_GRY_1-1024x1024.png"
        },
        {
          name: "Polo Ralph Lauren",
          description:
            "Impeccably tailored in Italy from lightweight navy wool.",
          price: 300,
          product_img:
            "https://i.dlpng.com/static/png/4671568-red-sweatshirt-png-clip-art-transparent-background-clothes-cloth-png-no-background-920_1014_preview.png"
        }
      ],
      tab: null
    };
  },
  components: {
    NavBar,
    Footer,
    Hero
  },
  methods: {
    ...mapActions(["addToCart"]),
    addProductToCart() {
      /**
       * Commented to be used when finish developing ...
       */
      // this.currentUser
      //   ? this.$http
      //       .get(`${API_GET}/p/${e.target.accessKey}`)
      //       .then(({ data }) => {
      //         this.addToCart(data.product);
      //       })
      //   : this.$refs["my-modal"].show();
    },
    productDetails(e) {
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
    }
  },
  mounted() {
    /**
     * Commented to be used when finish developing ...
     */
    // this.$http
    //   .get(API_GET)
    //   .then(({ data }) => {
    //     this.products = data.result;
    //     console.log(this.products)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  computed: {
    currentUser() {
      return this.$cookie.get("Username") ? true : false;
    }
  }
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
