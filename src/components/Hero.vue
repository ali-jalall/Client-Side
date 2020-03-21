<template>
  <div class="curved">
    <div class="float-left ml-5 text-left" style="font-size: 30pt">
      Your Better Chioce <br />
      Always <br />
      <button class="shop-now">
        <i class="fas fa-shopping-cart" /><span class="ml-3">Shop Now</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {}
}
</script>

<style scoped>
.curved {
  position: relative;
  width: 100%;
  height: 500px;
  margin-top: 222px;
  background-color: #8BE2BC;
  border-top-right-radius: 0% 100%;
  border-top-left-radius: 100% 100% ;
  text-align: center;
  text-indent: .1em;
}
.shop-now {
  margin: 20px 0px;
  font-size: 20pt;
  word-spacing: 1px;
  padding: 4px 26px !important;
  border: 3px solid #000;
  border-radius: 1.6rem;
  background-color: #fff;
}
</style>