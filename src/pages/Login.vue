<template>
  <div class="login-page sidebar-collapse">
    <div class="page-header header-filter" filter-color="orange">
      <div
        class="page-header-image background"
      ></div>
      <div class="content">
        <div class="container">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="card card-login card-plain">
              <form class="form" method="" action="#">
                <div class="card-header text-center">
                  <div class="logo-container">
                    <img src="../assets/img/now-logo.png" alt="" />
                  </div>
                </div>
                <div class="card-body">
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons users_circle-08"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name..."
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name..."
                    />
                  </div>
                </div>
                <div class="card-footer text-center">
                  <a
                    href="#pablo"
                    class="btn btn-primary btn-round btn-lg btn-block"
                    >Get Started</a
                  >
                </div>
                <div class="pull-left">
                  <h6>
                    <b-link to="signup" class="link footer-link">Create Account</b-link>
                  </h6>
                </div>

                <div class="pull-right">
                  <h6>
                    <a href="#pablo" class="link footer-link">Need Help?</a>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class=" container ">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com/">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com/">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright" id="copyright">
            ©
            Ali Jalal
            2020, Designed by
            <a href="https://www.invisionapp.com/" target="_blank">Invision</a>.
            Coded by
            <a href="https://www.creative-tim.com/" target="_blank"
              >Creative Tim</a
            >.
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// import Widget from "@/components/Widget/Widget";

const API_LOGIN = "https://tranquil-everglades-67262.herokuapp.com/users/login";

export default {
  name: "Login",
  components: {  },
  data() {
    return {
      errorMessage: null
    };
  },
  methods: {
    login() {
      let username = this.$refs.username.value;
      let password = this.$refs.password.value;

      this.$http
        .post(API_LOGIN, { username, password })
        .then(({ data }) => {
          data.err ? (this.errorMessage = data.err) : console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('../assets/img/login.jpg')
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

.page-header>.content {
    margin-top: 10%;
    text-align: center;
    margin-bottom: 50px;
}
</style>