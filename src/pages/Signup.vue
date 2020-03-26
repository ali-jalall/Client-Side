<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo text-center" style="margin: 34px 0;">
        <i class="fa fa-circle text-gray" />
        Beta Vibes
        <i class="fa fa-circle text-warning" />
      </h5>
      <Widget
        class="widget-auth mx-auto p-5"
        title="<h2 style='margin: 0 !important;'>Create Your Free Account Now</h2>"
        custom-header
      >
        <p class="widget-auth-nfo text-center py-3">
          
        </p>
        <form class="mt" @submit.prevent="signup">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{ errorMessage }}
          </b-alert>
          <div class="form-group">
            <input
              ref="username"
              class="form-control no-border"
              required
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              ref="password"
              class="form-control no-border"
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <b-button
            type="submit"
            size="sm"
            class="auth-btn mb-3"
            variant="primary"
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

const API_SIGNUP = 'http://localhost:3000/users/add';

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
      const username = this.$refs.username.value;
      const password = this.$refs.password.value;

      const userData = { username, password }

      this.$http
        .post(API_SIGNUP, userData)
        .then(({ data }) => {
          data.errMsg 
          ?
          this.errorMessage = data.errMsg 
          :
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>

<style scoped>
</style>
