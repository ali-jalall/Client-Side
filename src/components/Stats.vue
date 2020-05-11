<template>
  <b-row ref="stats">
    <b-col lg="3" sm="6" xs="12">
      <div class="pb-xlg h-100">
        <Widget class="h-100 mb-0">
          <div class="row">
            <div class="col-md-8 ">
              <span style="color: #2C2C2C; font-size: 16pt;">Products</span>
              <br />
              <div>
                <h3
                  class="pt-3 m-auto"
                  style="color: #43588F; font-size: 28pt; font-weight: 1800;"
                >
                  <strong> {{ products }} </strong>
                </h3>
              </div>
            </div>
            <div class="col-md-4 m-auto pt-3">
              <i class="fas fa-boxes" style="font-size: 44pt;"></i>
            </div>
          </div>

          <hr />
          <!-- <div>
            <span style="color: #9AAFC7; padding-right: 8px">T.D </span>
            <strong style="color: #25CBC5">$ 12.000.32</strong>
          </div> -->
        </Widget>
      </div>
    </b-col>
    <b-col lg="3" sm="6" xs="12">
      <div class="pb-xlg h-100">
        <Widget class="h-100 mb-0">
          <div class="row">
            <div class="col-md-8 ">
              <span style="color: #2C2C2C; font-size: 16pt;">Categories</span>
              <br />
              <div>
                <h3
                  class="pt-3 m-auto"
                  style="color: #43588F; font-size: 28pt; font-weight: 1800;"
                >
                  <strong> {{ categories }} </strong>
                </h3>
              </div>
            </div>
            <div class="col-md-4 m-auto pt-3">
              <i class="fas fa-th-list" style="font-size: 44pt;"></i>
            </div>
          </div>
          <hr />
          <!-- <div>
            <span style="color: #9AAFC7; padding-right: 8px">T.D </span>
            <strong style="color: #25CBC5">$ 12.000.32</strong>
          </div> -->
        </Widget>
      </div>
    </b-col>
    <b-col lg="3" sm="6" xs="12">
      <div class="pb-xlg h-100">
        <Widget class="h-100 mb-0">
          <div class="row">
            <div class="col-md-8 ">
              <span style="color: #2C2C2C; font-size: 16pt;">Customers</span>
              <br />
              <div>
                <h3
                  class="pt-3 m-auto"
                  style="color: #43588F; font-size: 28pt; font-weight: 1800;"
                >
                  <strong> {{ customers }} </strong>
                </h3>
              </div>
            </div>
            <div class="col-md-4 m-auto pt-3">
              <i class="fas fa-users" style="font-size: 44pt;"></i>
            </div>
          </div>
          <hr />
          <!-- <div>
            <span style="color: #9AAFC7; padding-right: 8px">T.D </span>
            <strong style="color: #25CBC5">$ 12.000.32</strong>
          </div> -->
        </Widget>
      </div>
    </b-col>
    <b-col lg="3" sm="6" xs="12">
      <div class="pb-xlg h-100">
        <Widget class="h-100 mb-0">
          <div class="row">
            <div class="col-md-8 ">
              <span style="color: #2C2C2C; font-size: 16pt;">Orders</span>
              <br />
              <div>
                <h3
                  class="pt-3 m-auto"
                  style="color: #43588F; font-size: 28pt; font-weight: 1800;"
                >
                  <strong> {{ orders }} </strong>
                </h3>
              </div>
            </div>
            <div class="col-md-4 m-auto pt-3">
              <i class="fas fa-clipboard-list" style="font-size: 44pt;"></i>
            </div>
          </div>
          <hr />
          <!-- <div>
            <span style="color: #9AAFC7; padding-right: 8px">T.D </span>
            <strong style="color: #25CBC5">$ 12.000.32</strong>
          </div> -->
        </Widget>
      </div>
    </b-col>
  </b-row>
</template>

<script>
const API_GET_PRODUCTS =
  "http://localhost:5000/products";
const API_GET_CATEGORIES =
  "http://localhost:5000/categories";
const API_GET_CUSTOMERS =
  "http://localhost:5000/users";
const API_GET_ORDERS = "http://localhost:5000/orders";
export default {
  name: "AdminStats",
  data() {
    return {
      products: 0,
      categories: 0,
      orders: 0,
      customers: 0,
    };
  },
  methods: {
    productsLength() {
      this.$http
        .get(API_GET_PRODUCTS)
        .then(({ data }) => {
          this.products = data.result.length
          console.log(data)
        })
        .catch(() => {});
    },
    categoriesLength() {
      this.$http
        .get(API_GET_CATEGORIES)
        .then(({ data }) => {
          this.categories = data.categories.length
        })
        .catch(() => {});
    },
    ordersLength() {
      this.$http
        .get(API_GET_ORDERS)
        .then(({ data }) => {
          this.orders = data.orders.length;
        })
        .catch(() => {});
    },
    customersLength() {
      this.$http
        .get(API_GET_CUSTOMERS)
        .then(({ data }) => {
          this.customers = data.users.length
        })
        .catch(() => {});
    },
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.stats,
    });
    this.productsLength()
    this.customersLength()
    this.ordersLength()
    this.categoriesLength()
    loader.hide()
  },
};
</script>
