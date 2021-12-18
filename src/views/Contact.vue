<template>
  <div>
    <section
      class="section has-background-light is-medium has-text-left pt-6 is-size-2"
      :class="$i18n.locale"
    >
      <div class="container is-max-desktop mt-6">
        <div class="text ml-6">
          <span class="big-letters" v-html="$t('contact.header')"> </span>
        </div>
      </div>
    </section>
    <!-- <section
      class="section has-background-primary has-text-left pt-6 is-size-2"
    > -->
    <div class="columns ">
      <div class="column is-three-fifths has-background-primary">
        <div class="container has-text-left form-content">
          <div class="additional-info has-text-light">
            {{ $t('contact.info') }}
          </div>
          <form class="contact-form big-letters" @submit.prevent="sendEmail">
            <div class="field">
              <label class="label">{{ $t('contact.name') }}</label>
              <div class="control">
                <input name="user_name" class="input" type="text" />
              </div>
            </div>

            <div class="field">
              <label class="label">{{ $t('contact.email') }}</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  name="user_email"
                  :placeholder="$t('contact.emailPlaceholder')"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <!-- <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span> -->
              </div>
              <!-- <p class="help is-danger">This email is invalid</p> -->
            </div>

            <div class="field">
              <label class="label">{{ $t('contact.message') }}</label>
              <div class="control">
                <textarea
                  name="message"
                  class="textarea"
                  :placeholder="$t('contact.messagePlaceholder')"
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary">
                  {{ $t('contact.submit') }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="column is-two-fifths has-background-link"
        style="padding: 0px"
      >
        <figure class="image is-800x866">
          <img src="../assets/SoNs-2019-23.jpeg" />
        </figure>
      </div>
    </div>
    <section
      class="section is-large wall-background pt-6 is-size-2"
      style="margin-top:-12px"
    >
      <div
        class="container has-text-left is-max-desktop mt-6"
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

export default {
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(
          result => {
            console.log('SUCCESS!', result.status, result.text);
          },
          error => {
            console.log('FAILED...', error);
          }
        );
    },
  },
};
</script>
<style scoped>
.big-letters {
  text-transform: capitalize;
  color: #c83737ff;
  font-weight: 900;
}
.form-content {
  margin: 10% 20%;
  max-width: 450px;
}

.wall-background {
  background-image: url(../assets/wall.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}

.additional-info {
  margin: 15px 0px;
}
</style>
