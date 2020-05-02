<template>
   <div id="app">
      <voice-to-text v-if="!voiceAnimationEnd" />
      <header v-show="voiceAnimationEnd">
         <img ref="btnImg" src="@/assets/img/button-el.png" />
         <searched ref="searched" />
      </header>
      <div v-show="voiceAnimationEnd" class="container">
         <info-card class="info-card active" />
         <info-card class="info-card" />
         <info-card class="info-card" />
         <info-card class="info-card" />
      </div>
   </div>
</template>

<script>
import Searched from "@/components/Searched";
import VoiceToText from "@/components/VoiceToText";
import InfoCard from "@/components/InfoCard";
import { gsap } from "gsap";
import { mapGetters } from "vuex";
export default {
   name: "App",
   components: { Searched, VoiceToText, InfoCard },
   computed: {
      ...mapGetters(["voiceAnimationEnd"]),
   },
   methods: {
      startAnimation() {
         const { btnImg, searched } = this.$refs;
         gsap
            .timeline({ defaults: { duration: 1 } })
            .from(".info-card.active", { duration: 0.6, opacity: 0, y: 30 })
            .from(
               ".info-card:not(.active)",
               { duration: 0.6, opacity: 0 },
               "-=0.6"
            )
            .from(btnImg, { opacity: 0 })
            .from(searched.$el, { opacity: 0, x: 25 }, "-=1");
      },
   },
   watch: {
      voiceAnimationEnd() {
         this.startAnimation();
      },
   },
};
</script>

<style lang="scss">
#app {
   width: 100%;
   height: 100%;
   display: flex;
}

header {
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   padding: 35px 0 0 35px;
   display: flex;
   img {
      width: 80px;
      height: auto;
   }
}
.container {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   .info-card {
      height: 100%;
      display: flex;
      justify-self: center;
      align-self: center;
      align-items: center;
      @for $i from 1 through 3 {
         &:not(.active):nth-child(#{$i + 1}) {
            position: absolute;
            z-index: -1;
            @if $i == 1 {
               opacity: 0.5;
            }
            @if $i == 2 {
               opacity: 0.3;
            }
            @if $i == 3 {
               opacity: 0.15;
            }
            filter: blur(1px * $i);
            transform: translateY($i * 35px) scale(1.02 - ($i/10));
         }
      }
   }
}
</style>
