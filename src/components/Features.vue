<template>
  <div class="text-center m-auto">
    <h3 class="header">
      <strong>Why You Should Choose us</strong>
    </h3>
    <hr class="horizontal-rule" />
    <b-row class="main-row mt-5">
      <b-col lg="5" class="res-img">
        <div class="m-auto features-div">
          <img src="../assets/img/features2.png" alt="" class="features-pic" />
        </div>
      </b-col>
      <b-col lg="7" class="weird-cols">
        <div class="magic-dev">
          <b-row class="para-row">
            <b-col lg="1" sm="12" class="my-auto"
              ><i class="fas fa-shopping-cart fas-10x fa-2x"> </i
            ></b-col>
            <b-col lg="11" class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
          <b-row class="sec-row text-center">
            <b-col lg="1" sm="12" class="my-auto"
              ><i class="fas fa-shopping-cart fas-10x fa-2x"> </i
            ></b-col>
            <b-col lg="11" class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
          <b-row class="third-row">
            <b-col lg="1" sm="12" class="my-auto"
              ><i class="fas fa-shopping-cart fas-10x fa-2x"> </i
            ></b-col>
            <b-col lg="11" class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Features"
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-top: 3%;
}

.horizontal-rule {
  background-color: #8be2bc;
  padding: 2px 0px;
  width: 100px;
}

main-row {
  text-align: center;
}

.features-div {
  padding-left: 10%;
  margin-left: 34%;
  position: relative;
  bottom: 57%;
  text-align: center;
}

.features-pic {
  width: 475px;
}

.para-row {
  font-size: 16pt;
  margin: auto;
  /* margin: 3% 0px 7%; */
}

.sec-row {
  font-size: 16pt;
  margin: 7% 0px;
}

.third-row {
  font-size: 16pt;
  margin: 7% 0px;
}

.weird-cols {
  height: 500px;
  text-align: center;
}

.text {
  text-align: justify;
  padding-top: 10px;
}

.res-img {
  height: 490px;
}

/* Media Queries */
@media screen and (max-width: 800px) {
  .header {
    text-align: center;
    margin-top: 6%;
    font-size: 18pt;
  }

  .features-div {
    padding-left: 14%;
    position: relative;
    bottom: 46%;
    left: 4%;
    text-align: center;
    margin: auto;

  }

  .features-pic {
    margin-top: -20px;
    width: 360px;
    margin: auto;
  }

  .para-row {
    font-size: 16pt;
    margin: 3% 0px 7%;
  }

  .sec-row {
    font-size: 16pt;
    margin: 12.7% 0px;
  }

  .text {
    text-align: justify;
    /* padding-top: 10px; */
    padding: 20px;
  }

  .third-row {
    font-size: 16pt;
    margin: 7% 0px;
  }

  .weird-cols {
    height: 400px;
    /* margin-top: 0; */
    margin-bottom: 36em;
  }

  .res-img {
    height: 400px;
  }
}
</style>
