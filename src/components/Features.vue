<template>
<div>
      <h3 class="text-center" style="margin-top: 3%;">
        <strong>Why You Should Choose us</strong>
      </h3>
      <hr style="background-color: #8BE2BC; padding: 2px 0px; width: 100px;" />
      <b-row class="text-center mt-5">
        <b-col lg="5" class='weird-cols'>
          <div
            class="m-auto text-center features-pic"
          >
            <img src="../assets/img/features2.png" alt="" width='515px' >
          </div>
        </b-col>
        <b-col lg="7" class='weird-cols'>
          <b-row style="font-size: 16pt; margin: 3% 0px 7%">
            <b-col lg="1"><i class="fas fa-shopping-cart fas-10x fa-2x"> </i></b-col>
            <b-col lg="11">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
          <b-row style="font-size: 16pt; margin: 12.7% 0px">
            <b-col lg="1"><i class="fas fa-shopping-cart fas-10x fa-2x"> </i></b-col>
            <b-col lg="11">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
          <b-row style="font-size: 16pt; margin: 7% 0px">
            <b-col lg="1"><i class="fas fa-shopping-cart fas-10x fa-2x"> </i></b-col>
            <b-col lg="11">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              industry. Lorem Ipsum has been the industry's standard dummy text
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: 'Features'
}
</script>

<style scoped>
.features-pic {
  padding-left: 14%;
  margin-left: 34%;
  position: relative;
  bottom: 46%;
}

.weird-cols {
  height: 600px;
}
</style>