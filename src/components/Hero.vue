<template>
  <div class="curved">
    <b-row>
      <b-col lg="5" md="6" class='colp'>
        <div
          class="hero-para"
        >
          <strong class='hero-header'>Everything You Want!</strong> <br />
          <p class="hero-text">
            Go Deep through Our Website and Find Everything you are Looking For! <br />
          </p> 
          <b-button class="shop-now">
            <i class="fas fa-shopping-cart" /><span class="ml-3">Shop Now</span>
          </b-button>
        </div>
      </b-col>
      <b-col lg="7" md="6">
        <div class="div-img">
          <img
            class="hero-img"
            src="../assets/img/hero.png"
            alt="woman-holding-bags"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "Hero",
  components: {}
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */

/* parent */
.curved {
  font-family: 'Roboto', sans-serif;
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 222px;
  background-color: #8be2bc;
  border-top-right-radius: 0% 100%;
  border-top-left-radius: 100% 100%;
  text-align: center;
  text-indent: 0.1em;
}

/* Children */
.hero-para {
  float: left;
  text-align: left;
  font-size: 24pt;
  margin-left: 20%;
  position: relative;
  bottom: 24%;
}

.hero-header {
  font-size: 34pt;
}

.hero-text {
  font-size: 18pt;
}

.shop-now {
  color: #000;
  margin: 20px 0px;
  font-size: 20pt;
  word-spacing: 1px;
  padding: 4px 26px !important;
  border: 3px solid #000;
  border-radius: 1.6rem;
  transition: .5 all ease-in;
  background-color: #fff !important;
}

.shop-now:hover {
  color: black;
  background-color: #8be3bc !important;
  /* border: 1px solid #8be3bc; */
  outline: none;
}

.div-img {
  position: relative;
  bottom: 35.7%;
  padding-top: 0em;
  width: 700px;
}

.colp {
  height: 600px;
}

.hero-img {
  width: 700px;
}

.btn-secondary {
  color: black !important;
  border: 3px solid #8be3bc !important;
  background-color: white !important;
  box-shadow: none !important;
}

 
@media screen and (max-width: 800px) {
  .curved {
    font-family: 'Roboto', sans-serif;
    position: relative;
    width: 100%;
    height: 307px;
    margin-top: 222px;
    background-color: #8be2bc;
    border-top-right-radius: 0% 100%;
    border-top-left-radius: 100% 100%;
    text-align: center;
    text-indent: 0.1em;
  }
  
  .colp {
    text-align: left;
    height: 0px !important;
  }

  .hero-img {
    width: 440px;
  }
  
  .div-img {
    position: relative;
    bottom: 5%;
    right: 4.4em;
    padding-top: 0em;
    width: 700px;
  }

  .hero-para {
    float: left;
    text-align: left;
    font-size: 24pt;
    position: relative;
    bottom: 5.8em;
    left: -2em;
    width: 90%;
  }

  .hero-header {
    font-size: 24pt;
  }

  .hero-text {
    font-size: 16pt;
  }

  .shop-now {
    margin: 8px 0;
    font-size: 16pt;
    word-spacing: .2px;
    padding: 4px 26px !important;
    border: 3px solid #000;
    border-radius: 1.6rem;
    background-color: #fff;
  }
}
</style>
