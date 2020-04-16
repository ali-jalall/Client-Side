<template>
  <div class="signup-page sidebar-collapse">
    <div class="page-header header-filter" filter-color="black">
      <div class="page-header-image main-img"></div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-4 ml-auto mr-auto">
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Marketing</h5>
                  <p class="description">
                    We've created the marketing campaign of the website. It was
                    a very interesting collaboration.
                  </p>
                </div>
              </div>

              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons media-1_button-pause"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Fully Coded in HTML5</h5>
                  <p class="description">
                    We've developed the website with HTML5 and CSS3. The client
                    has access to the code using GitHub.
                  </p>
                </div>
              </div>

              <div class="info info-horizontal">
                <div class="icon icon-info">
                  <i class="now-ui-icons users_single-02"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Built Audience</h5>
                  <p class="description">
                    There is also a Fully Customizable CMS Admin Dashboard for
                    this product.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mr-auto">
              <div class="card card-signup">
                <div class="card-body">
                  <h4 class="card-title text-center">Register</h4>
                  <div class="social text-center">
                    <button class="btn btn-icon btn-round btn-twitter">
                      <i class="fab fa-twitter"></i>
                    </button>
                    <button class="btn btn-icon btn-round btn-dribbble">
                      <i class="fab fa-dribbble"></i>
                    </button>
                    <button class="btn btn-icon btn-round btn-facebook">
                      <i class="fab fa-facebook"> </i>
                    </button>
                    <h5 class="card-description">or be classical</h5>
                  </div>
                  <b-alert
                    class="alert-sm"
                    variant="danger"
                    :show="!!errorMessage"
                  >
                    {{ errorMessage }}
                  </b-alert>
                  <form class="form" @submit.prevent="submitForm">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons users_circle-08"></i
                        ></span>
                      </div>
                      <input
                        required
                        v-model="user.username"
                        type="text"
                        class="form-control"
                        placeholder="Username..."
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons ui-1_email-85"></i
                        ></span>
                      </div>
                      <input
                        required
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        placeholder="Email..."
                      />
                    </div>

                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons text_caps-small"></i
                        ></span>
                      </div>
                      <input
                        required
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        placeholder="Password..."
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons text_caps-small"></i
                        ></span>
                      </div>
                      <input
                        required
                        v-model="user.age"
                        type="number"
                        class="form-control"
                        placeholder="Age..."
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons text_caps-small"></i
                        ></span>
                      </div>
                      <input
                        v-model="user.phone_number"
                        type="number"
                        class="form-control"
                        placeholder="Phone Number..."
                      />
                    </div>
                    <input
                      class="btn btn-primary"
                      variant="primary"
                      type="submit"
                      value="Signup"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";
const API_SIGNUP = "http://localhost:5000/users/add";

export default {
  name: "Signup",
  components: { Footer },
  data() {
    return {
      errorMessage: null,
      user: {
        username: "",
        email: "",
        password: "",
        age: "",
        phone_number: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post(API_SIGNUP, this.user)
        .then(({ data }) => {
          console.log(data)
          if (data.errMsg) {
            return data.errMsg.includes("Must")
              ? (this.errorMessage = data.errMsg)
              : console.log(data);
          }
          this.$cookie.set("X-auth", data.token);
          this.$cookie.set("auth", true);
          this.$cookie.set("Username", data.username);
          this.$cookie.set("user_id", data.user_id);

          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.main-img {
  background-image: url("../assets/img/bg18.jpg");
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
  margin-top: 2%;
  text-align: center;
  margin-bottom: -90px;
}
</style>
