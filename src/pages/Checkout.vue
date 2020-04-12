<template>
  <div style="background-color: #F9FBFD">
    <NavBar />
    <div class="p-3 m-auto ">
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
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>ADDRESS</th>
                <th>CITY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product._id">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>

                <td>
                  <b-button
                    variant="danger"
                    :accesskey="product._id"
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
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "Checkout",
  components: {
    NavBar,
    Footer
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      length: "getNumberOfCartProducts"
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    }
  }
};
</script>
