<template>
  <div
    class="contactus-1 section-image contact-img main"
  >
  <NavBar :fixedTop='true'/>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-5">
          <h2 class="title">Get in Touch</h2>
          <h4 class="description">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </h4>
          <div class="info info-horizontal">
            <div class="icon icon-primary">
              <i class="now-ui-icons location_pin"></i>
            </div>
            <div class="description">
              <h4 class="info-title">Find us at the office</h4>
              <p class="description">
                Bld Mihail Kogalniceanu, nr. 8,<br />
                7652 Bucharest,<br />
                Romania
              </p>
            </div>
          </div>
          <div class="info info-horizontal">
            <div class="icon icon-primary">
              <i class="now-ui-icons tech_mobile"></i>
            </div>
            <div class="description">
              <h4 class="info-title">Give us a ring</h4>
              <p class="description">
                Michael Jordan<br />
                +40 762 321 762<br />
                Mon - Fri, 8:00-22:00
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 ml-auto mr-auto">
          <div class="card card-contact card-raised">
            <form role="form" id="contact-form1" method="post">
              <div class="card-header text-center">
                <h4 class="card-title">Contact Us</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 pr-2">
                    <label>First name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons users_circle-08"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name..."
                        aria-label="First Name..."
                        autocomplete="given-name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 pl-2">
                    <div class="form-group">
                      <label>Last name</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="now-ui-icons text_caps-small"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name..."
                          aria-label="Last Name..."
                          autocomplete="family-name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons ui-1_email-85"></i
                      ></span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Here..."
                      autocomplete="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    rows="6"
                  ></textarea>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" />
                        <span class="form-check-sign"></span>
                        I'm not a robot
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <button
                      type="submit"
                      class="btn btn-primary btn-round pull-right"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
export default {
  name: 'Contact',
  components: {
    NavBar, Footer
  }
}
</script>
<style scoped>
.contact-img {
  background-image: url('../assets/img/contact1.jpg')
}
</style>