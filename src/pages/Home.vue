<template>
  <div id="main">
    <Hero />
    <Features />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default {
  name: "Home",
  components: {
    Hero,
    Features,
  }
};
</script>
<style scoped>
#main {
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
