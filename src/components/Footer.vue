<template>
  <div id="main">
    <b-row class='p-4'>

      <b-col lg='3'>
        <div class='text-center'>
          <div class='contents' style="display: inline-block; text-align: left;">
            <h4>SHOP</h4>
            <p class='contents' style="color: #466A5A; padding-top: -8px;">By Category</p>
            <h6>Men</h6>
            <h6>Women</h6>
            <h6>Kids</h6>
            <h6>Classic</h6>
          </div>
        </div>
      </b-col>

      <b-col lg='3'>
        <h4>SUPPORT</h4>
        <p style="visibility: hidden;">By Category</p>
        <h6>Store Locator</h6>
        <h6>Other Status</h6>
      </b-col>

      <b-col lg='3'>
        <h4>COMPANY</h4>
        <p style="visibility: hidden;">By Category</p>
        <h6>Customer Services</h6>
        <h6>Terms of Use</h6>
        <h6>Privacy</h6>
        <h6>Career</h6>
        <h6>About</h6>
      </b-col>

      <b-col lg='3'>
        <h4>CONTACT</h4>
        <p style="visibility: hidden;">By Category</p>
        <h6>Email</h6>
        <a href="#" style="padding-top: 7em;">Example@gmail.com</a>
        <h6>Phone</h6>
        <p>+2181234567</p>
        <h6>Address</h6>
        <address>1234 South Coast <br> Costa Mesa, CA123</address>
      </b-col>
      
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

h3 {
  font-family: 'Montserrat', sans-serif;
}

h6 {
  padding: 2px 0;
}

#main {
  overflow: hidden;
  background-color: #8be2bc;
}

.contents {
  font-family: 'Roboto', sans-serif; 
}
</style>