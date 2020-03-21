<template>
  <div id="main">
    <NavBar />
    <Hero />
    <Features />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default {
  name: "Home",
  components: {
    NavBar,
    Hero,
    Features
  }
};
</script>
<style scoped>
#main {
  overflow-x: hidden;
}
</style>
