<template>
  <div>
    <Widget
      title="<h5 class='pt-3'><span class='fw-semi-bold '>Customers </span> List</h5>"
      bodyClass="widget-table-overflow py-2"
      customHeader
    >
      <div class="table-responsive" ref="customersList">
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
            <tr v-for="(user, index) in users" :key="user._id">
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone_number }}</td>
              <td>{{ user.address }}</td>
              <td>{{ user.city }}</td>
              <td>
                <b-button
                  @click="removeCustomer"
                  variant="danger"
                  :id="index"
                  :accesskey="user._id"
                  class="mr-1 p-1 px-3"
                >
                  <i class="fas fa-minus-circle"></i>
                </b-button>
                <b-button
                  @click="userProfile"
                  :accesskey="user._id"
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
const API_GET = "https://tranquil-everglades-67262.herokuapp.com/users";
export default {
  name: "OrdersList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    removeCustomer(e) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.customersList,
      });
      this.$http
        .delete(`${API_GET}/${e.target.accessKey}`)
        .then(({ data }) => {
          if (data.deleted) {
            this.users.splice(e.target.id, 1);
            loader.hide();
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
    userProfile(e) {
      this.$router.push({ path: `${e.target.accessKey}` });
    },
  },
  mounted() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.customersList,
    });
    this.$http
      .get(API_GET)
      .then(({ data }) => {
        this.users = data.users;
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
