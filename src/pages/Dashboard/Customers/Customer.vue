<template>
  <div class="profile-page sidebar-collapse">
    <div class="wrapper">
      <div
        class="page-header clear-filter page-header-small"
        filter-color="orange"
      >
        <div class="page-header-image pro" style="" data-parallax="true"></div>

        <div class="container">
          <div class="photo-container">
            <img src="../../../assets/img/ryan.jpg" alt="" />
          </div>

          <h3 class="title">Ryan Scheinder</h3>
          <p class="category">Photographer</p>

          <div class="content">
            <div class="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div class="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div class="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="button-container">
            <a href="#button" class="btn btn-primary btn-round btn-lg"
              >Follow</a
            >
            <a
              href="#button"
              class="btn btn-default btn-round btn-lg btn-icon"
              rel="tooltip"
              title=""
              data-original-title="Follow me on Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#button"
              class="btn btn-default btn-round btn-lg btn-icon"
              rel="tooltip"
              title=""
              data-original-title="Follow me on Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>

          <h3 class="title">About me</h3>
          <h5 class="description text-center">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </h5>
        </div>
        <div class="row">
          <div class="col-md-6 user_products">
            <h3 class="text-center">User<strong> Products</strong></h3>
            <div class="table-responsive px-4 m-auto text-center">
              <table class="table mb-0 requests-table">
                <thead>
                  <tr class="text-muted">
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>CATEGORY</th>

                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product._id">
                    <td>
                      <img
                        :src="product.product_imgs[0]"
                        alt="product_img"
                        width="100px"
                      />
                    </td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>

                    <td>$ {{ product.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-6 user_orders">
            <h3 class="text-center">User<strong> Orders</strong></h3>
            <div class="table-responsive px-4 m-auto text-center">
              <table class="table mb-0 requests-table">
                <thead>
                  <tr class="text-muted">
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>CATEGORY</th>

                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product._id">
                    <td>
                      <img
                        :src="product.product_imgs[0]"
                        alt="product_img"
                        width="100px"
                      />
                    </td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>

                    <td>$ {{ product.price }}</td>
                  </tr>
                </tbody>
              </table>
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
  name: "CustomerPage",
  data() {
    return {
      products: []
    };
  },
  created() {
    /**
     * TODO: fetch orders and products for user 
     */
    this.$http.get(API_GET).then(({ data }) => {
      this.products = data.result;
    });
  }
};
</script>
<style scoped>
.page-header .page-header-image {
  position: absolute;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("../../../assets/img/bg5.jpg");
}
</style>
