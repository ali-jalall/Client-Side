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
              <!-- <th>NAME</th> -->
              <th>PRODUCTS</th>
              <th>TOTAL PRICE</th>
              <!-- <th>PRICE</th> -->
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
              <!-- <th>STATUS</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id">
              <td>{{ order.username }}</td>
              <td>{{ order.products_id.length }}</td>
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
                  :accesskey="order._id"
                  class="mr-1 p-1 px-3"
                >
                  <i class="fas fa-minus-circle"></i>
                </b-button>
                <b-button variant="info" class="p-1 px-3">
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
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/orders";
export default {
  name: "OrdersList",
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    removeOrder(e) {
      this.$http
        .delete(`${API_GET}/${e.target.accessKey}`)
        .then(() => console.log({ deleted: true }))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.$http.get(API_GET).then(({ data }) => {
      this.orders = data.orders;
    });
  },
};
</script>
