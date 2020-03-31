<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";
const default_layout = "default";
export default {
  name: "App",
  components: {
    // NavBar,
    // Footer
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "assets/base.scss";
</style>
