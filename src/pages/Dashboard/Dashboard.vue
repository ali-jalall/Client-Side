<template>
  <div class="dashboard-page">
    <h1 class="page-title">Dashboard</h1>
    <b-row>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100 ">
          <Widget class="h-100 w-100 mb-0" title="Visits Today" close>
            <div class="d-flex justify-content-between align-items-center mb-lg">
              <h2>4,332</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+830</h6><p class="text-muted mb-0 mr"><small>Logins</small></p>
              </div>
              <div class="mt">
                <h6>0.5%</h6><p class="text-muted mb-0"><small>Sign Out</small></p>
              </div>
              <div class="mt">
                <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100 ">
          <Widget class="h-100 w-100 mb-0" title="Revenue Breakdown" close>
          </Widget>
        </div>
      </b-col>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100 ">
          <Widget class="h-100 w-100 mb-0" title="App Perfomance" close>
            <p class="text-muted d-flex flex-wrap">
              <small class="mr-lg d-flex align-items-center">
                <span class="circle bg-danger text-danger mr-xs" style="font-size: 4px;">
                  .
                </span>
                  This Period
              </small>
              <small class="mr-lg d-flex align-items-center">
                <span class="circle bg-primary text-primary mr-xs" style="font-size: 4px;">
                  .
                </span>
                Last Period
              </small>
            </p>
            <h6>SDK</h6>
            <b-progress class="mb-xs" style="height: 5px"
              variant="danger" :value="60" :max="100" />
            <b-progress class="mb" style="height: 5px"
              variant="primary" :value="35" :max="100" />
            <h6>Integration</h6>
            <b-progress class="mb-xs" style="height: 5px"
              variant="danger" :value="40" :max="100" />
            <b-progress style="height: 5px"
              variant="primary" :value="55" :max="100" />
          </Widget>
        </div>
      </b-col>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100 ">
          <Widget class="h-100 w-100 mb-0" title="Server Overview" close>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Dashboard',
  components: {
    Widget
  },
  data() {
    return { };
  },
  methods: {
    getRandomData() {
      
    },
    getRevenueData() {
      
    }
  },
  computed: {
    
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
