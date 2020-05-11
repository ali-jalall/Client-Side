<template>
  <div class="signup-page sidebar-collapse">
    <NavBar />
    <div class="page-header header-filter" filter-color="black">
      <div class="page-header-image main-img"></div>
      <div class="content">
        <div class="container">
          <div class="row">
            
            <div class="col-md-4 col-sm-12 pt-5 m-auto">
              <div class="card card-signup">
                <div class="card-body">
                  <h4 class="card-title text-center">Register</h4>
                  <div class="social text-center">
                    <button class="btn btn-icon btn-round btn-twitter">
                      
                    </button>
                    <button class="btn btn-icon btn-round btn-dribbble">
                      
                    </button>
                    <button class="btn btn-icon btn-round btn-facebook">
                      
                    </button>
                   
                  </div>
                  <b-alert
                    class="alert-sm"
                    variant="danger"
                    :show="!!errorMessage"
                  >
                    {{ errorMessage }}
                  </b-alert>
                  <form class="form text-left" @submit.prevent="submitForm">
                    <div
                      class="form-group"
                      :class="$v.user.username.$error ? 'has-danger' : ''"
                    >
                      <label for="username">Username</label>
                      <input
                        v-model="user.username"
                        class="form-control"
                        id="username"
                        type="text"
                      />
                      <div
                        class="error text-danger"
                        v-if="!$v.user.username.minLength"
                      >
                        Name must have at least
                        {{ $v.user.username.$params.minLength.min }} letters.
                      </div>
                      <br />
                    </div>
                    <div
                      class="form-group"
                      :class="$v.user.email.$error ? 'has-danger' : ''"
                    >
                      <label for="email">Email</label>
                      <input
                        v-model="user.email"
                        class="form-control"
                        id="email"
                        type="email"
                      />
                      <div
                        class="error text-danger"
                        v-if="!$v.user.email.email"
                      >
                        Must be an Email
                      </div>

                      <br />
                    </div>
                    <div
                      class="form-group"
                      :class="$v.user.password.$error ? 'has-danger' : ''"
                    >
                      <label for="password">Password</label>
                      <input
                        v-model="user.password"
                        class="form-control"
                        id="password"
                        type="password"
                      />
                      <div
                        class="error text-danger"
                        v-if="!$v.user.password.minLength"
                      >
                        Password must have at least
                        {{ $v.user.password.$params.minLength.min }} letters.
                      </div>
                      <br />
                    </div>
                    <div
                      class="form-group"
                      :class="$v.user.age.$error ? 'has-danger' : ''"
                    >
                      <label for="age">Age</label>
                      <input
                        v-model="user.age"
                        class="form-control"
                        id="age"
                        type="number"
                      />
                      <div
                        class="error text-danger"
                        v-if="!$v.user.age.between"
                      >
                        Please Enter Valid Age.
                      </div>
                      <br />
                    </div>
                    <div
                      class="form-group"
                      :class="$v.user.phone_number.$error ? 'has-danger' : ''"
                    >
                      <label for="phone_number">Phone Number</label>
                      <input
                        v-model="user.phone_number"
                        class="form-control"
                        id="phone_number"
                        type="number"
                      />
                      <div
                        class="error text-danger"
                        v-if="!$v.user.phone_number.minLength"
                      >
                        Phone Number must have at least
                        {{ $v.user.phone_number.$params.minLength.min }}
                        Numbers.
                      </div>
                      <br />
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
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { required, minLength, email, between } from "vuelidate/lib/validators";

const API_SIGNUP = "http://localhost:5000/users/add";

export default {
  name: "Signup",
  components: { Footer, NavBar },
  data() {
    return {
      errorMessage: null,
      user: {
        username: "",
        email: "",
        password: "",
        age: "",
        phone_number: "",
      },
    };
  },
  validations: {
    user: {
      username: {
        required,
        minLength: minLength(6),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      age: {
        required,
        between: between(1, 100),
      },
      phone_number: {
        required,
        minLength: minLength(10),
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.user.$touch();
      if (this.$v.user.$error) return;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.productContainer,
      });

      this.$http
        .post(API_SIGNUP, this.user)
        .then(({ data }) => {
          loader.hide();
          if (data.auth) {
            this.$cookie.set("X-auth", data.token);
            this.$cookie.set("auth", true);
            this.$cookie.set("Username", data.username);
            this.$cookie.set("user_id", data.user_id);
            this.$router.push("/");
          } else {
            this.$toasted.error("Sorry it seems like there's an issue!", {
              duration: 3000,
              position: "top-center",
            });
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
  },
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

.has-danger:after {
  content: "\ea53";
  color: #ff3636;
  padding-top: 27px;
}
.has-success:after {
  padding-top: 30px;
}

.has-danger .form-control {
  border-color: #f67777;
  color: #ff3636;
  background-color: hsla(0, 0%, 87%, 0.1);
}

.signup-page .form-group,
.signup-page .input-group {
  margin-bottom: -10px;
}

label {
  color: rgb(112, 105, 105);
  margin-left: 10px;
}

.error {
  font-size: 10pt;
  padding-left: 6px;
}
</style>
