<template>
  <div>
    <h1 class="page-title">Inventory</h1>
    <Stats />
    <router-view></router-view>
  </div>
</template>

<script>
import Stats from '@/components/Stats';
export default {
  name: 'Inventory',
  components: {
    Stats,
  }
}
</script>