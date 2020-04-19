<template>
  <div class="profile-page sidebar-collapse" ref="userProfile">
    <NavBar/>
    <div class="wrapper">
      <div
        class="page-header clear-filter page-header-small"
        filter-color="orange"
      >
        <div class="page-header-image pro" data-parallax="true"></div>

        <div class="container">
          <div class="photo-container">
            <img
              src="../assets/people/user.png"
              class="bg-white"
              alt=""
            />
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
          <h3 class="title">About me</h3>
          <h5 class="description text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </h5>
        </div>
        <div class="row">
          <div class="col-md-5 user_products">
            <h3 class="text-center">User<strong> Products</strong></h3>
            <div class="table-responsive px-4 m-auto text-center">
              <table class="table mb-5 requests-table" v-if="products.length">
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
              <div class="text-center" v-else>
                <img src="../assets/img/packet.png" alt="empty-box" />
                <br />
                <h3><strong class="text-center">No Products</strong></h3>
              </div>
            </div>
          </div>
          <div class="col-md-7 user_orders">
            <h3 class="text-center">User<strong> Orders</strong></h3>
            <div class="table-responsive px-4 m-auto text-center">
              <table class="table mb-0 requests-table" v-if="orders.length">
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center" v-else>
                <img src="../assets/img/packet.png" alt="empty-box" />
                <br />
                <h3><strong class="text-center">No Orders</strong></h3>
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
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/users";

export default {
  name: "CustomerPage",
  data() {
    return {
      user: {},
      products: [],
      orders: [],
    };
  },
  components: {
    NavBar,
    Footer
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.userProfile,
    });
    this.$http
      .put(`${API_GET}/${this.$route.params.id}`)
      .then(({ data }) => {
        this.products = data.products;
        this.orders = data.orders;
        this.user = data.user;
        loader.hide();
        console.log(this.orders);
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
    ordersCompleted() {
      return this.orders.reduce((acc, order) => {
        return order.status === "Completed" ? ++acc : acc;
      }, 0);
    },
  },
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
  background-image: url("../assets/img/bg5.jpg");
}

.content {
  background-color: transparent;
}
.profile-page .content {
  max-width: 520px;
  margin: 0 auto;
}
</style>
