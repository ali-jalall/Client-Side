<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Orders</span> List</h5>"
      bodyClass="widget-table-overflow py-2"
      customHeader
    >
      <div class="table-responsive">
        <table class="table mb-0 requests-table">
          <thead>
            <tr class="text-muted">
              <th>USERNAME</th>
              <th>PRODUCTS</th>
              <th>TOTAL PRICE</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="order._id">
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
                <b-button
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
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
  </div>
</template>
<script>
const API_GET = "http://localhost:5000/orders";
export default {
  name: "OrdersList",
  data() {
    return {
      orders: []
    };
  },
  methods: {
    removeOrder(e) {
      this.$http
        .delete(`${API_GET}/${e.target.accessKey}`)
        .then(({ data }) => {
          data.deleted
            ? this.orders.splice(e.target.id, 1)
            : // TODO: Order not deleted! so something
              console.log(data);
        })
        .catch(err => console.log(err));
    },
    orderDetails(e) {
      this.$router.push({ path: `${e.target.accessKey}` });
    }
  },
  mounted() {
    this.$http.get(API_GET).then(({ data }) => {
      this.orders = data.orders;
    });
  }
};
</script>
