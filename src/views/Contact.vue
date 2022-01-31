<template>
  <div class="has-background-primary">
    <div
      class="columns is-vcentered is-gapless has-background-light has-text-left is-size-2"
      :class="$i18n.locale"
    >
      <div class="column is-2 ">
        <div class="contact-bubble has-background-primary">
          {{ $t('header.contact') }}
        </div>
      </div>
      <div class="column is-1"></div>
      <div class="column is-4 image-column">
        <div
          class="big-letters header-text"
          v-html="$t('contact.header')"
        ></div>
        <img
          src="../assets/desert.jpeg"
          style="margin-top:15vh; margin-bottom: -17px !important;"
        />
      </div>
    </div>

    <div class="columns is-gapless">
      <div class="column is-7 has-background-primary">
        <div class="container has-text-left form-content" :class="$i18n.locale">
          <div class="additional-info has-text-light">
            {{ $t('contact.info') }}
          </div>
          <form class="contact-form big-letters" @submit.prevent="sendEmail">
            <div class="field">
              <label class="label">{{ $t('contact.name') }}</label>
              <div class="control">
                <input
                  name="user_name"
                  v-model="name"
                  class="input"
                  type="text"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">{{ $t('contact.email') }}</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  v-model="email"
                  name="user_email"
                  :placeholder="$t('contact.emailPlaceholder')"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">{{ $t('contact.message') }}</label>
              <div class="control">
                <textarea
                  name="message"
                  v-model="message"
                  class="textarea"
                  :placeholder="$t('contact.messagePlaceholder')"
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped is-pulled-right">
              <div class="control">
                <button class="button is-primary">
                  {{ $t('contact.submit') }}
                </button>
              </div>
            </div>
          </form>
          <div
            class="notification mt-4 is-success"
            :class="{ 'is-hidden': !showSuccessful }"
          >
            <button
              class="delete"
              v-on:click="showSuccessful = !showSuccessful"
            ></button>
            {{ $t('contact.successful') }}
          </div>
          <div
            class="notification mt-4 is-danger"
            v-for="error in errors"
            :key="error"
          >
            {{ error }}
          </div>
          <div
            class="notification mt-4 is-danger"
            :class="{ 'is-hidden': !showFailed }"
          >
            <button
              class="delete"
              v-on:click="showFailed = !showFailed"
            ></button>
            {{ $t('contact.failed') }}
          </div>
        </div>
      </div>
      <div class="column has-background-link">
        <figure class="image is-800x866">
          <img src="../assets/SoNs-2019-23.jpeg" />
        </figure>
      </div>
    </div>
    <section
      class="section is-medium wall-background is-size-2"
      style="margin-top:-12px"
    >
      <div
        class="container has-text-left is-max-desktop"
        style="max-width:300px"
      >
        <div class="text ml-6 pl-6">
          <span class="big-letters" v-html="$t('contact.footer')"> </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  showFailed = false;
  showSuccessful = false;
  name = '';
  email = '';
  message = '';
  errors = [];
  sendEmail(e) {
    this.errors = [];

    if (!this.name) {
      this.errors.push(
        'Please fill out the name input so that we know who you are.'
      );
      return;
    }
    if (!this.message) {
      this.errors.push('Please fill out the message input before sending it.');
      return;
    }
    emailjs
      .sendForm(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.VUE_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.status);
          console.log(result.text);
          e.target.reset();
          this.showSuccessful = true;
        },
        error => {
          console.log('FAILED...', error);
          this.showFailed = true;
        }
      );
  }
}
</script>
<style scoped>
.big-letters {
  text-transform: uppercase;
  color: #c83737ff;
  font-weight: 900;
  font-family: 'Roboto-Bold';
}
.form-content {
  margin: 10% 20%;
  max-width: 450px;
  min-height: 500px;
}
.header-text {
  position: absolute;
  margin-left: 15%;
  margin-top: 20%;
}
.input,
.textarea {
  background-color: #ceb999;
  border-width: 0;
  border-radius: 0;
}
.contact-bubble {
  width: 350px;
  text-align: center;
  color: white;
  transform: rotate(270deg);
  text-transform: uppercase;
  padding: 65px 0px;
  border-radius: 0 0 100% 100%;
  margin-left: -140px;
}
.wall-background {
  background-image: url(../assets/wall.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.label,
.button.is-primary {
  text-transform: uppercase;
  color: #850504;
  font-family: 'Roboto';
  font-weight: 500;
}
.columns.is-gapless:not(:last-child) {
  margin-bottom: 0rem;
}
.additional-info {
  margin: 20px 0 30px 0;
}
.container.ar {
  text-align: right !important;
}

.columns {
  margin-right: 0 !important;
}
</style>
