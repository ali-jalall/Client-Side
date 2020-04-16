<template>
  <div class="dashboard-page">
    <h1 class="page-title">Dashboard</h1>
    <Stats />
  </div>
</template>

<script>
import Stats from "../../components/Stats";


export default {
  name: "Dashboard",
  components: {
    Stats,
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
