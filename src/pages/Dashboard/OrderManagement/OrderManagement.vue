<template>
  <div>
    <h1 class="page-title">Order Management</h1>
    <Stats />
    <router-view></router-view>
  </div>
</template>

<script>
import Stats from '@/components/Stats'
export default {
  name: 'OrderManagement',
  components: {
    Stats
  }
}
</script>