<template>
  <section class="section has-background-brown sons">
    <img class="medium left top" src="../assets/Shapes/Shape-Pale-1.png" />
    <img
      class="middle medium top pt-5"
      src="../assets/Shapes/Shape-Wine-2.png"
    />
    <img
      class="small right bottom mr-6"
      src="../assets/Shapes/Shape-Wine-3.png"
    />
    <img
      class="small far-right top pt-6"
      src="../assets/Shapes/Shape-Mustard-2.png"
    />
    <figure class="figure is-726x500" style="position:relative">
      <img src="../assets/SoNs-2019-09.jpg" />
    </figure>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sons extends Vue {}
</script>

<style scoped>
.sons {
  height: 500px;
}
.left {
  left: 10%;
}
.middle {
  left: auto;
  right: auto;
}

.right {
  right: 5%;
}
.far-right {
  right: 0%;
}
.medium {
  position: absolute;
  width: 300px;
  height: auto;
}
.small {
  position: absolute;
  width: 150px;
  height: auto;
}
.top {
  margin-top: -80px;
}
.bottom {
  margin-top: 150px;
}
</style>
