<template>
  <div class="login-page sidebar-collapse">
    <NavBar />
    <div class="page-header header-filter" filter-color="orange">
      <div class="page-header-image background"></div>
      <div class="content">
        <div class="container">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="card card-login card-plain">
              <form class="form" @submit.prevent="submitForm">
                <div class="card-header text-center">
                  <div class="logo-container">
                    <img src="../assets/img/now-logo.png" alt="" />
                  </div>
                </div>
                <b-alert
                  class="alert-sm"
                  variant="danger"
                  :show="!!errorMessage"
                >
                  {{ errorMessage }}
                </b-alert>
                <div class="card-body">
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons ui-1_email-85"></i
                      ></span>
                    </div>
                    <input
                      required
                      ref="email"
                      type="email"
                      class="form-control"
                      placeholder="Email..."
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      required
                      ref="password"
                      type="password"
                      class="form-control"
                      placeholder="Password..."
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  value="Login"
                />

                <div class="pull-left">
                  <h6>
                    <b-link to="signup" class="link footer-link"
                      >Create Account</b-link
                    >
                  </h6>
                </div>

                <div class="pull-right">
                  <h6>
                    <b-link to="" class="link footer-link">Need Help?</b-link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const API_LOGIN = "https://tranquil-everglades-67262.herokuapp.com/users/login";

export default {
  name: "Login",
  components: { Footer, NavBar },
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    submitForm() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.productContainer,
      });
      let email = this.$refs.email.value;
      let password = this.$refs.password.value;

      this.$http
        .post(API_LOGIN, { email, password })
        .then(({ data }) => {
          if (data.auth) {
            loader.hide();
            this.$cookie.set("X-auth", data.token);
            this.$cookie.set("auth", true);
            this.$cookie.set("Username", data.username);
            this.$cookie.set("user_id", data.user_id);
            this.$router.push("/");
          } else {
            loader.hide();
            this.errorMessage = "Please Enter Valid Data!";
          }
        })
        .catch((err) => {
          loader.hide();
          this.errorMessage = err.message;
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/img/login.jpg");
}

.page-header .page-header-image {
  position: absolute;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  background: transparent;
}

.page-header > .content {
  margin-top: 10%;
  text-align: center;
  margin-bottom: 50px;
}
</style>
