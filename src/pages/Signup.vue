<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo text-center" style="margin: 34px 0;">
        <i class="fa fa-circle text-gray" />
        Beta Vibes
        <i class="fa fa-circle" style="color: #85d6b3" />
      </h5>
      <Widget
        class="widget-auth mx-auto p-5"
        title="<h2 class='pb-4 header-font'>Create Your Free Account</h2>"
        custom-header
      >
        <form class=" font" @submit.prevent="signup">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{ errorMessage }}
          </b-alert>
          <div class="form-group text-left pt-3">
            <label  for="username">Username</label>
            <input
              ref="username"
              class="form-control no-border"
              required
              type="text"
              name="username"
            />
          </div>
          <div class="form-group text-left pt-3">
            <label for="password">Password</label>
            <input
              ref="password"
              class="form-control no-border"
              required
              type="password"
              name="password"
            />
          </div>
          <b-button
            type="submit"
            size="md"
            class="auth-btn my-3 signup font"
          >
            Signup
          </b-button>
        </form>
      </Widget>
    </b-container>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

const API_SIGNUP = 'https://tranquil-everglades-67262.herokuapp.com/users/add';

export default {
  name: "Signup",
  components: { Widget },
  data() {
    return {
      errorMessage: null
    }
  },
  methods: {
    signup () {
      let userData = { 
        username: this.$refs.username.value,
        password: this.$refs.password.value,
      }

      this.$http
        .post(API_SIGNUP, userData)
        .then(({ data }) => {
          if ( data.errMsg ) {
            return data.errMsg.includes('Must')
            ?
              this.errorMessage = data.errMsg
            :
              console.log(data);
          }
          this.$cookie.set('X-auth', data.token);
          this.$cookie.set('auth', true);
          this.$cookie.set('Username', data.username);
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>

<style scoped>
.font {
  font-family: "Roboto", sans-serif;
}

.header-font {
  font-family: "Montserrat", sans-serif;
}

.signup {
  background-color: #8be2bc;
  border: none;
  color: black;
  font-size: 14pt;
}

.btn-secondary:hover {
  color: black !important;
  border: none;
  background-color: #85d6b3 !important;
  box-shadow: none !important;
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
  border-color: #85d6b3;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
  outline: 0 none;
}
</style>
