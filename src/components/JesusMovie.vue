<template>
  <div class="arc-cont">
    <iframe
      :src="source"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class JesusMovie extends Vue {
  getSource() {
    if (this.$i18n.locale === 'en') {
      return 'https://api.arclight.org/videoPlayerUrl?refId=1_529-jf-0-0&apiSessionId=61bd0b29be02b0.58782966&player=bc.vanilla6&dtm=0&playerStyle=default';
    }
    if (this.$i18n.locale === 'de') {
      return 'https://api.arclight.org/videoPlayerUrl?refId=1_1106-jf-0-0&apiSessionId=61d1563d549177.61776912&player=bc.vanilla6&dtm=0&playerStyle=default';
    }

    if (this.$i18n.locale === 'ar') {
      return 'https://api.arclight.org/videoPlayerUrl?refId=1_21061-jf-0-0&apiSessionId=61d2362243d803.70120207&player=bc.vanilla6&dtm=0&playerStyle=default';
    }

    if (this.$i18n.locale === 'cz') {
      return 'https://api.arclight.org/videoPlayerUrl?refId=1_4432-jf-0-0&apiSessionId=61d1bc0851bf90.04332813&player=bc.vanilla6&dtm=0&playerStyle=default';
    }
    return 'https://api.arclight.org/videoPlayerUrl?refId=1_529-jf-0-0&apiSessionId=61bd0b29be02b0.58782966&player=bc.vanilla6&dtm=0&playerStyle=default';
  }
  source = this.getSource();
}
</script>

<style scoped>
.arc-cont {
  position: relative;
  display: block;
  margin: 10px auto;
  width: 100%;
}
.arc-cont:after {
  padding-top: 59%;
  display: block;
  content: '';
}
.arc-cont > iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 98%;
  height: 98%;
  border: 0;
}
</style>
