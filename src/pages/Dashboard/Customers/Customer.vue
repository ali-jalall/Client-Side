<template>
  <div class="profile-page sidebar-collapse">
    <div class="wrapper">
      <div
        class="page-header clear-filter page-header-small"
        filter-color="orange"
      >
        <div class="page-header-image pro" data-parallax="true"></div>

        <div class="container">
          <div class="photo-container">
            <img src="../../../assets/img/ryan.jpg" alt="" />
          </div>

          <h3 class="title my-auto">{{ user.username }}</h3>
          <p class="category my-auto">{{ user.email }}</p>

          <div class="content">
            <div class="social-description">
              <h2>{{ products.length }}</h2>
              <p>Products Bought</p>
            </div>
            <div class="social-description">
              <h2>{{ orders.length }}</h2>
              <p>Orders</p>
            </div>
            <div class="social-description">
              <h2>{{ ordersCompleted }}</h2>
              <p>Orders Complete</p>
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
            </a>
            <a
              href="#button"
              class="btn btn-default btn-round btn-lg btn-icon"
              rel="tooltip"
              title=""
              data-original-title="Follow me on Instagram"
            >
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
          <div class="col-md-5 user_products">
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
                  <tr v-for="(product, index) in products" :key="index">
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
          <div class="col-md-7 user_orders">
            <h3 class="text-center">User<strong> Orders</strong></h3>
            <div class="table-responsive px-4 m-auto text-center">
              <table class="table mb-0 requests-table">
                <thead>
                  <tr class="text-muted">
                    <th>USERNAME</th>
                    <th>PRODUCTS</th>
                    <th>TOTAL PRICE</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, index) in orders" :key="index">
                    <td>{{ order.username }}</td>
                    <td>{{ order.products_ids.length }}</td>
                    <td>$ {{ order.total_price }}</td>
                    <td>{{ order.createdAt.slice(0, 10) }}</td>
                    <!-- <td></td> -->
                    <td>
                      <b-button
                        :variant="
                          order.status === 'Pending'
                            ? 'info'
                            : order.status === 'Completed'
                            ? 'success'
                            : 'danger'
                        "
                        class="mr-1 p-1 px-3"
                      >
                        {{ order.status }}
                      </b-button>
                    </td>
                    <td>
                      <!-- <b-button
                        @click="removeOrder"
                        variant="danger"
                        :id="index"
                        :accesskey="order._id"
                        class="mr-1 p-1 px-3"
                      >
                        <i class="fas fa-minus-circle"></i>
                      </b-button>
                      <b-button
                        @click="orderDetails"
                        :accesskey="order._id"
                        variant="info"
                        class="p-1 px-3"
                      >
                        <i class="fas fa-edit"></i>
                      </b-button> -->
                    </td>
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
const API_GET = "http://localhost:5000/users";

export default {
  name: "CustomerPage",
  data() {
    return {
      user: {},
      products: [],
      orders: []
    };
  },
  created() {
    this.$http
      .put(`${API_GET}/${this.$route.params.id}`)
      .then(({ data }) => {
        this.products = data.products;
        this.orders = data.orders;
        this.user = data.user
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ordersCompleted () {
      return this.orders.reduce((acc, order) => {
        return order.status === 'Completed' ? ++acc : 0;
      }, 0)
    }
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

.content {
  background-color: transparent;
}
.profile-page .content {
  max-width: 520px;
  margin: 0 auto;
}
</style>
