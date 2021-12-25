<template>
  <section
    class="section is-clipped dear-listener-2 has-background-link"
    :class="$i18n.locale"
  >
    <div class="has-background-brown rectangle is-hidden-mobile"></div>
    <div class="has-background-danger circle left "></div>
    <div
      class="has-background-warning bigger-circle right is-hidden-mobile"
    ></div>
    <div class="has-background-warning circle middle is-hidden-tablet"></div>
    <div
      class="container is-max-desktop p-6-desktop 
        has-text-justified is-size-5-tablet is-size-6-mobile"
    >
      <span class="has-text-white is-hidden-desktop">
        {{ $t('about.text3') }}
      </span>
      <div class="more-padding is-hidden-touch">
        <span class="has-text-white">
          {{ $t('about.text3') }}
        </span>
      </div>
      <img
        class="children-image"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        src="../assets/children.jpg"
      />
      <img
        class="green-hill-image pl-4"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        src="../assets/green-hill.jpg"
      />
      <div
        data-aos-easing="ease-in-sine"
        data-aos="fade-zoom-in"
        data-aos-once="true"
        class="is-hidden-mobile big-message centered top-rounded is-italic has-text-weight-semibold 
        has-text-centered p-6 is-size-3 has-text-white has-background-warning"
      >
        <span v-html="$t('about.hope')"> </span>
      </div>
    </div>
    <div
      data-aos-easing="ease-in-sine"
      data-aos="fade-zoom-in"
      data-aos-once
      class="is-hidden-tablet small-message centered top-rounded is-italic has-text-weight-semibold 
        has-text-centered p-5 is-size-4 has-text-white has-background-warning"
    >
      <span v-html="$t('about.hope')"> </span>
    </div>
    <figure class="image is-1024x683" style="position:inherit">
      <img class="narrow-road" src="../assets/narrow-road.jpg" />
    </figure>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DearListener2 extends Vue {}
</script>

<style scoped>
.circle {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}

.bigger-circle {
  border-radius: 100%;
  width: 300px;
  height: 300px;
}
.rectangle {
  width: 150px;
  height: 350px;
  position: absolute;
  right: -5vw;
  margin-top: -3%;
}
.top-rounded {
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
}
.centered {
  margin-left: auto;
  margin-right: auto;
  z-index: 2000;
}
.big-message {
  margin-top: 150px;
  width: 420px;
  height: 100%;
}

.narrow-road {
  width: 100vw;
  height: 100%;
  z-index: 0;
  margin-top: -130px;
}
.small-message {
  margin-top: 150px;
  width: 280px;
  height: 350px;
}
.more-padding-x {
  padding: 0px 70px;
}
.more-padding {
  padding: 0px 70px 70px 70px;
}
.left {
  left: -7vw;
  position: absolute;
  margin-top: 9%;
}
.children-image {
  width: 550px;
  left: 20%;
}
.green-hill-image {
  width: 350px;
  right: 20%;
}
.right {
  right: -12vw;
  position: absolute;
  margin-top: -12%;
}

.middle {
  right: 3vw;
  position: absolute;
  margin-top: 70%;
}
</style>
