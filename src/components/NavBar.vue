<template>
  <div>
    <b-navbar class="py-3" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <div class="text-center" style="word-spacing: 1000px;">
          <strong style="font-size: 20pt" class="text-dark">BETA</strong><br />
          <em style="color: grey">Vibes</em>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item to='#' style="font-size: 18pt;" class="mx-4">Home</b-nav-item>
          <b-nav-item to='#' style="font-size: 18pt;" class="mx-4">Products</b-nav-item>
          <b-nav-item to='#' style="font-size: 18pt;" class="ml-4">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
          <!-- <b-nav-form class="mr-5">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <b-button
            class="signup mx-2"
            >Signup</b-button
          >
          <b-button
            class="login mx-2"
            >Login</b-button
          >
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import '../assets/img/bg29'
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link{
  color:black !important
}

.nav-link:active {
  color: red;
}

.navbar-dark .navbar-nav .nav-link.active {
    color: red !important;
}

.navbar-toggler {
  background-color: #8BE2BC;
  color: black
}


.signup {
  background-color: #fff;
  color: black;
  padding: 6px 20px;
  border-radius: 1.6rem;
  border: 3px solid #8BE2BC;
  transition: .5 all ease-in;
  font-size: 14pt;
}

.login {
  background-color: #8BE2BC;
  color: black;
  border-radius: 1.6rem;
  padding: 8px 24px;
  border: none;
  transition: .5 all ease-in;
  font-size: 14pt;
}

.login:hover {
  background-color: #57DFA4;
  color: black;
}

.signup:hover {
  background-color: #8BE2BC;
  color: black;
  border: 3px solid #8BE2BC;
}
</style>
