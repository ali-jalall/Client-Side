<template>
  <div id="main">
    <NavBar />
    <Hero />
    <Features />
    <Project />
    <Sales />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Project from "@/components/Project";
import Sales from "@/components/Sales";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    NavBar,
    Hero,
    Features,
    Project,
    Sales,
    Subscribe,
    Footer,
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
