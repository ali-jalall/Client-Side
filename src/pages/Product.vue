<template>
  <div>
    <NavBar />
    <template>
      <div>
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
      </div>
    </template>
    <div class="wrapper" ref="productContainer">
      <div class="page-header page-header-mini">
        <div
          class="page-header-image product-header"
          data-parallax="true"
        ></div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div
                id="productCarousel"
                class="carousel slide"
                data-ride="carousel"
                data-interval="8000"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#productCarousel"
                    data-slide-to="0"
                    class=""
                  ></li>
                  <li
                    data-target="#productCarousel"
                    data-slide-to="1"
                    class=""
                  ></li>
                  <li
                    data-target="#productCarousel"
                    data-slide-to="2"
                    class="active"
                  ></li>
                  <li data-target="#productCarousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner" role="listbox" >
                  <div class="carousel-item active" v-for="image in product.product_imgs" :key="image">
                    <img
                      class="d-block img-raised"
                      :src="image"
                      alt="First slide"
                    />
                  </div>
                  <!-- <div class="carousel-item">
                    <img
                      class="d-block img-raised"
                      :src="image"
                      alt="Second slide"
                    />
                  </div> -->
                  <!--
                  <div class="carousel-item active">
                    <img
                      class="d-block img-raised"
                      src="../assets/img/pp-3.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-raised"
                      src="../assets/img/pp-4.jpg"
                      alt="Third slide"
                    />
                  </div> -->
                </div>
                <a
                  class="carousel-control-prev"
                  href="#productCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-icon btn-round btn-sm"
                    name="button"
                  >
                    <i class="now-ui-icons arrows-1_minimal-left"></i>
                  </button>
                </a>
                <a
                  class="carousel-control-next"
                  href="#productCarousel"
                  role="button"
                  data-slide="next"
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-icon btn-round btn-sm"
                    name="button"
                  >
                    <i class="now-ui-icons arrows-1_minimal-right"></i>
                  </button>
                </a>
              </div>

              <p class="blockquote blockquote-primary">
                "And thank you for turning my personal jean jacket into a
                couture piece. Wear yours with mirrored sunglasses on
                vacation."<br /><br />
                <small>Kanye West</small>
              </p>
            </div>
            <div class="col-md-6 ml-auto mr-auto">
              <h2 class="title">{{ product.name }}</h2>
              <h5 class="category">{{ product.category }}</h5>
              <h2 class="main-price">$ {{ product.price }}</h2>

              <div
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
                class="card-collapse"
              >
                <div class="card card-plain">
                  <div class="card-header" role="tab" id="headingOne">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                      <i class="now-ui-icons arrows-1_minimal-down"></i>
                    </a>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="card-body">
                      <p>
                        {{ product.details }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card card-plain">
                  <div class="card-header" role="tab" id="headingTwo">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Designer Information

                      <i class="now-ui-icons arrows-1_minimal-down"></i>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="card-body">
                      <p>
                        Sample Text if you want to put in case you wanna show
                        something.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card card-plain">
                  <div class="card-header" role="tab" id="headingThree">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Details and Care

                      <i class="now-ui-icons arrows-1_minimal-down"></i>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="card-body">
                      <ul>
                        Sample Text if you want to put in case you wanna show
                        something.
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-end row">
                  <button @click="checkOutNow" class="col-md-8 btn btn-primary mr-3">
                    Buy Now &nbsp;<i class="fas fa-dollar-sign"></i>
                  </button>
                  <button @click="addProductToCart" class="col-md-3 btn btn-outline-primary mr-3">
                    Add to Cart &nbsp;<i
                      class="now-ui-icons shopping_cart-simple"
                    ></i>
                  </button>
                </div>
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
import { mapActions } from "vuex";
const API_GET = "http://localhost:5000/products";

export default {
  name: "Product",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      product: {},
      fullPage: false,
    };
  },
  mounted() {
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.productContainer,
    });
    this.$http
      .get(`${API_GET}/p/${this.$route.params.id}`)
      .then(({ data }) => {
        this.product = data.product;
        loader.hide()
      })
      .catch(err => {
        console.error(err);
      });
  },
  computed: {
    currentUser() {
      return this.$cookie.get("Username") ? true : false;
    }
  },
  methods: {
    ...mapActions(["addToCart"]),
    addProductToCart() {
      console.log(this.product)
      this.currentUser
        ? this.addToCart(this.product)
        : this.$refs["loginWarning"].show();
    },
    checkOutNow () {
      if ( this.currentUser ) {
        this.addToCart(this.product)
        this.$router.push({ path: '/checkout' })
      } else {
        this.$refs["loginWarning"].show();
      }
    }
  }
};
</script>

<style scoped>
.page-header:after,
.page-header:before {
  background-image: url("../assets/img/bg26.jpg");
  position: absolute;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
