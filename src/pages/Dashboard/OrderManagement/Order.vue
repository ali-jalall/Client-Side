<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Order</span></h5>"
      bodyClass="widget-table-overflow py-2"
      customHeader
    >
      <div class="row" ref="order" v-if="products.length">
        <div class="col-md-11 m-auto text-right">
          <b-button
            @click="removeOrder"
            :accesskey="order._id"
            variant="danger"
            class="ml-3 p-2 px-3"
          >
            X
          </b-button>
          <br />
          <strong style="font-size: 14pt;">Status</strong>

          <select
            @change="changeStatus"
            ref="dropdown"
            name="dropdown"
            style="padding: 4px 6px; border: 0; border-radius: .2rem; color: white; margin-left: 12px"
            :class="
              order.status === 'Pending'
                ? 'bg-info'
                : order.status === 'Declined'
                ? 'bg-danger'
                : 'bg-success'
            "
            :value="order.status"
          >
            <option class="bg-success">Completed</option>
            <option class="bg-info">Pending</option>
            <option class="bg-danger">Declined</option>
          </select>
        </div>
      </div>
      <div class="row m-auto text-center" v-if="products.length">
        <div class="col-md-4 text-center user_img">
          <div class="text-center p-2" style="font-size: 16pt;">
            User <strong>Profile</strong>
          </div>
          <img
            src="../../../assets/img/marie.jpg"
            class="user_img"
            alt="user_img"
          />
          <div class="text-center user_data mt-2 ">
            <p>Username: {{ order.username }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Phone Number: {{ user.phone_number }}</p>
            <p>City: {{ user.city }}</p>
            <p>Address: {{ user.address }}</p>
          </div>
        </div>

        <div class="col-md-8 table-responsive">
          <div class="text-center p-2 mt-3" style="font-size: 16pt;">
            Order <strong> Products</strong>
          </div>
          <table class="table mb-0 requests-table">
            <thead>
              <tr class="text-muted">
                <th>IMAGE</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product._id">
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
                <td>{{ order.quantities[index] }}</td>
                <td>
                  <b-button
                    @click="removeProduct"
                    variant="danger"
                    :id="index"
                    :accesskey="product._id"
                    :name="order.quantities[index]"
                    class="mr-1 p-1 px-3"
                  >
                    <i class="fas fa-minus-circle"></i>
                  </b-button>
                </td>
              </tr>
              <tr>
                <td style="font-size: 14pt;"><b>Total Price:</b></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="font-size: 14pt;" class="pl-3">
                  <b>${{ order.total_price }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <h2 class="text-center">404 NotFound</h2>
      </div>
    </Widget>
  </div>
</template>
<script>
const API_GET = "http://localhost:5000/orders";

export default {
  name: "Order",
  data() {
    return {
      order: {},
      user: {},
      products: [],
      quantities: [],
      fullPage: false
    };
  },
  methods: {
    switchClasses(value) {
      value === "Completed"
        ? (this.$refs.dropdown.className = "bg-success")
        : value === "Pending"
        ? (this.$refs.dropdown.className = "bg-info")
        : (this.$refs.dropdown.className = "bg-danger");
    },
    changeStatus(e) {
      this.$http
        .put(`${API_GET}/edit/${this.$route.params.id}`, {
          status: e.target.value,
        })
        .then(({ data }) => {
          if (data.updated) {
            this.switchClasses(e.target.value);

            this.$toasted.success("Order Status has been changed", {
              duration: 3000,
              position: "top-center",
              action: {
                text: "Ok",
              },
            });
          } else {
            console.log(data);
          }
        })
        .catch(() => {
          this.$toasted.error("Sorry it seems like there's an issue!", {
            duration: 3000,
            position: "top-center",
          });
        });
    },
    getUserAndProductsByOrder() {},
    getOrder() {},
    removeProduct(e) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.order,
      });
      let _order_id = this.$route.params.id;
      this.$http
        .patch(`${API_GET}/${_order_id}`, {
          id: e.target.accessKey,
          quantity: e.target.name,
        })
        .then(({ data }) => {
          if (data.deleted) {
            loader.hide();
            this.products.splice(e.target.id, 1);
            this.order.total_price = data.order_price;
            if (this.products.length === 0) {
              this.order = {};
              this.$router.go(-1)
            }
          } else {
            console.log(data.order);
          }
        })
        .catch(() => {
          loader.hide();
          this.$toasted.error("Sorry it seems like there's an issue!", {
            duration: 3000,
            position: "top-center",
          });
        });
    },
    removeOrder(e) {
      this.$http
        .delete(`${API_GET}/${e.target.accessKey}`)
        .then(() => {
          this.order = {}
          this.$router.go(-1);
        })
        .catch(() => {
          this.$toasted.error("Sorry it seems like there's an issue!", {
            duration: 3000,
            position: "top-center",
          });
        });
    },
  },
  async mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.order,
    });
    this.$http
      .put(`${API_GET}/${this.$route.params.id}`)
      .then(({ data }) => {
        this.products = data.products;
        this.user = data.user;
      })
      .then(() => {
        return this.$http.get(`${API_GET}/${this.$route.params.id}`);
      })
      .then(({ data }) => {
        this.order = data.order;
        this.quantities = data.order.quantities;
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
.user_img {
  border-radius: 50%;
  padding: 14px 32px;
  width: 100%;
}

option {
  height: 500px;
}

select:focus {
  background-color: #fff;
  outline: none;
  border: none;
  box-shadow: none;
}
</style>
