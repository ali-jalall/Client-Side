<template>
  <div>
    <h1 class="page-title">Customers</h1>
    <Stats />
    <router-view></router-view>
  </div>
</template>

<script>
import Stats from '@/components/Stats'
export default {
  name: 'Customers',
  components: {
    Stats 
  }
}
</script>