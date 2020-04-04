<template>
  <div
    class="subscribe-line subscribe-line-image ddd"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="text-center">
            <h4 class="title">Subscribe to our Newsletter</h4>
            <p class="description">
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </p>
          </div>

          <div class="card card-raised card-form-horizontal">
            <div class="card-body">
              <form method="" action="#">
                <div class="row">
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons ui-1_email-85"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email Here..."
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <button type="button" class="btn btn-primary btn-block">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Subscribe'
}
</script>
<style scoped>
.ddd {

background-image: url('../assets/img/bg43.jpg');
}
</style>