<template>
  <section class="section is-clipped dear-listener-2 has-background-link">
    <div class="has-background-brown rectangle is-hidden-mobile"></div>
    <div class="has-background-danger circle left "></div>
    <div class="has-background-warning circle right is-hidden-mobile"></div>
    <div class="has-background-warning circle middle is-hidden-tablet"></div>
    <div
      class="container is-max-desktop p-6-desktop 
        has-text-justified is-size-5-tablet is-size-6-mobile"
    >
      <span class="has-text-white is-hidden-desktop">
        {{ longText }}
      </span>
      <div class="more-padding is-hidden-touch">
        <span class="has-text-white">
          {{ longText }}
        </span>
      </div>
      <img
        class="children-image"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        src="../assets/children.jpg"
      />
      <img
        class="green-hill-image pl-4"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        src="../assets/green-hill.jpg"
      />
      <div
        data-aos-easing="ease-in-sine"
        data-aos="fade-zoom-in"
        class="is-hidden-mobile big-message centered top-rounded is-italic has-text-weight-semibold 
        has-text-centered p-6 is-size-3 has-text-white has-background-warning"
      >
        <span v-html="wehopeText"> </span>
      </div>
    </div>
    <div
      data-aos-easing="ease-in-sine"
      data-aos="fade-zoom-in"
      class="is-hidden-tablet small-message centered top-rounded is-italic has-text-weight-semibold 
        has-text-centered p-5 is-size-4 has-text-white has-background-warning"
    >
      <span v-html="wehopeText"> </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DearListener2 extends Vue {
  longText = `Over the course of two years, musicians from many different nations
          participated in the writing and recording of this album, each one
          bringing a unique flavor from their own culture. Now, as we near the
          end of 2020, we are delighted to present this final product to you. We
          hope to use this album as a point of connection between eastern and
          western cultures, and in particular, spotlight the beauty of the Iraqi
          heritage. We hope that what we have created together between nations
          will be a seed planted for new hope, new joy, and new life in the
          Middle East and beyond.`;

  wehopeText = `"We hope <br />
          that what we have created together between nations will be a seed
          planted for new hope, new joy, and new life in the Middle East and
          beyond."`;
}
</script>

<style scoped>
.circle {
  border-radius: 100%;
  width: 200px;
  height: 200px;
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
}
.big-message {
  margin-top: 150px;
  width: 400px;
  height: 500px;
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
  margin-top: 5%;
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
  right: -7vw;
  position: absolute;
  margin-top: -7%;
}

.middle {
  right: 3vw;
  position: absolute;
  margin-top: 70%;
}
</style>
