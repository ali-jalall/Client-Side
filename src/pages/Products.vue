<template>
  <div>
    <NavBar />
    <template>
      <div>
        <b-modal ref="my-modal" hide-footer>
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
      </div>
    </template>
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
          <div class="col-md-3">
                    <div class="collapse-panel">
                        <div class="card-body">
                            <div class="card card-refine card-plain">
                                <h4 class="card-title">
                                    Refine
                                    <button class="btn btn-default btn-icon btn-neutral pull-right" rel="tooltip" title="" data-original-title="Reset Filter">
                                        <i class="arrows-1_refresh-69 now-ui-icons"></i>
                                    </button>
                                </h4>
                           <div class="card-header" role="tab" id="headingOne">
                             <h6 class="mb-0">
                               <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Price Range

                                 <i class="now-ui-icons arrows-1_minimal-down"></i>
                               </a>
                           </h6>
                           </div>

                           <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                             <div class="card-body">
                                 <span id="price-left" class="price-left pull-left" data-currency="€">€30</span>
                                 <span id="price-right" class="price-right pull-right" data-currency="€">€900</span>
                                 <div class="clearfix"></div>
                                 <div id="sliderRefine" class="slider slider-refine noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" style="transform: translate(0%, 0px) scale(1, 1);"></div></div><div class="noUi-origin" style="transform: translate(-100%, 0px); z-index: 5;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="30.0" aria-valuemax="900.0" aria-valuenow="30.0" aria-valuetext="30.00"><div class="noUi-touch-area"></div></div></div><div class="noUi-origin" style="transform: translate(0%, 0px); z-index: 4;"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="30.0" aria-valuemax="900.0" aria-valuenow="900.0" aria-valuetext="900.00"><div class="noUi-touch-area"></div></div></div></div></div>
                             </div>
                           </div>
                         </div>
                         <div class="card card-refine card-plain">
                           <div class="card-header" role="tab" id="headingTwo">
                             <h6>
                                   <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                     Clothing

                                     <i class="now-ui-icons arrows-1_minimal-down"></i>
                                   </a>
                               </h6>
                           </div>
                           <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                             <div class="card-body">

                                 <div class="form-check">
                                  <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-sign"></span>
                                    Casual Shirts
                                  </label>
                                </div>

                                <div class="form-check">
                                 <label class="form-check-label">
                                   <input class="form-check-input" type="checkbox">
                                   <span class="form-check-sign"></span>
                                   Formal Shirts
                                 </label>
                               </div>

                               <div class="form-check">
                               <label class="form-check-label">
                                 <input class="form-check-input" type="checkbox" checked="">
                                 <span class="form-check-sign"></span>
                                 Jeans
                               </label>
                             </div>

                             <div class="form-check">
                             <label class="form-check-label">
                               <input class="form-check-input" type="checkbox">
                               <span class="form-check-sign"></span>
                               Polos
                             </label>
                           </div>

                           <div class="form-check">
                           <label class="form-check-label">
                             <input class="form-check-input" type="checkbox" checked="">
                             <span class="form-check-sign"></span>
                             Pijamas
                           </label>
                         </div>

                         <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">
                            <span class="form-check-sign"></span>
                            Shorts
                          </label>
                        </div>

                        <div class="form-check">
                         <label class="form-check-label">
                           <input class="form-check-input" type="checkbox">
                           <span class="form-check-sign"></span>
                           Blazers
                         </label>
                       </div>
                             </div>
                           </div>
                         </div>
                         <div class="card card-refine card-plain">
                           <div class="card-header" role="tab" id="headingThree">
                             <h6>
                               <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                 Designer

                                 <i class="now-ui-icons arrows-1_minimal-down"></i>
                               </a>
                           </h6>
                           </div>
                           <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                             <div class="card-body">
                               <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox">
                                  <span class="form-check-sign"></span>
                                All
                                </label>
                              </div>
                              <div class="form-check">
                               <label class="form-check-label">
                                 <input class="form-check-input" type="checkbox">
                                 <span class="form-check-sign"></span>
                                 Polo Ralph Lauren
                               </label>
                             </div>

                             <div class="form-check">
                              <label class="form-check-label">
                                <input class="form-check-input" type="checkbox">
                                <span class="form-check-sign"></span>
                                Wooyoungmi
                              </label>
                            </div>

                            <div class="form-check">
                             <label class="form-check-label">
                               <input class="form-check-input" type="checkbox">
                               <span class="form-check-sign"></span>
                               Alexander McQueen
                             </label>
                           </div>
                           <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox">
                              <span class="form-check-sign"></span>
                              Tom Ford
                            </label>
                          </div>

                          <div class="form-check">
                           <label class="form-check-label">
                             <input class="form-check-input" type="checkbox">
                             <span class="form-check-sign"></span>
                             AMI
                           </label>
                         </div>

                         <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">
                            <span class="form-check-sign"></span>
                            Berena
                          </label>
                        </div>

                        <div class="form-check">
                         <label class="form-check-label">
                           <input class="form-check-input" type="checkbox">
                           <span class="form-check-sign"></span>
                           Thom Sweeney
                         </label>
                       </div>

                       <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox">
                          <span class="form-check-sign"></span>
                          Calvin Klein
                        </label>
                      </div>


                             </div>
                           </div>
                         </div>
                         <div class="card card-refine card-plain">
                           <div class="card-header" role="tab" id="headingfour">
                             <h6>
                               <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                 Colour

                                 <i class="now-ui-icons arrows-1_minimal-down"></i>
                               </a>
                           </h6>
                           </div>
                           <div id="collapsefour" class="collapse" role="tabpanel" aria-labelledby="headingfour">
                             <div class="card-body">

                      <div class="form-check">
                       <label class="form-check-label">
                         <input class="form-check-input" type="checkbox">
                         <span class="form-check-sign"></span>
                         Black
                       </label>
                     </div>

                     <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox">
                        <span class="form-check-sign"></span>
                        Blue
                      </label>
                    </div>

                    <div class="form-check">
                     <label class="form-check-label">
                       <input class="form-check-input" type="checkbox">
                       <span class="form-check-sign"></span>
                       Brown
                     </label>
                   </div>

                   <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox">
                      <span class="form-check-sign"></span>
                      Gray
                    </label>
                  </div>

                  <div class="form-check">
                   <label class="form-check-label">
                     <input class="form-check-input" type="checkbox">
                     <span class="form-check-sign"></span>
                     Green
                   </label>
                 </div>

                 <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox">
                    <span class="form-check-sign"></span>
                    Purple
                  </label>
                </div>


                             </div>
                           </div>
                         </div>
                        </div>
                    </div>
                </div>
          <b-col lg="10">
            <div class="pt-3">
              <b-card
                v-for="product in result"
                :key="product._id"
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
                  :accesskey="product._id"
                >
                  <i class="fas fa-info-circle" />
                  More Info</b-button
                >
                <b-button
                  @click="addProductToCart"
                  :accesskey="product._id"
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
// const faker = require("faker");scts/add";
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/products";

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
    ...mapActions(["addToCart"]),
    addProductToCart(e) {
      this.currentUser
        ? this.$http
            .get(`${API_GET}/p/${e.target.accessKey}`)
            .then(({ data }) => {
              this.addToCart(data.product);
            })
        : this.$refs["my-modal"].show();
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
  mounted () {
    // for (let i = 0; i <= 10; i++) {
    //   let name = faker.commerce.productName();
    //   let price = faker.commerce.price();
    //   let description = faker.lorem.paragraph();
    //   let category = faker.commerce.productAdjective();
    //   let product_img = faker.image.imageUrl();
    //   console.log(product_img);
    //   let obj = { name, price, description, category, product_img };
    //   this.$http.post(API_POST, obj).then(() => {
      this.$http
        .get(API_GET)
        .then(data => {
          console.log('sdfsdsf')
          this.result = data.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    //   });
    // }
  },
  computed: {
    currentUser() {
      return this.$cookie.get("Username") ? true : false;
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
  max-height: 33.5rem;
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
