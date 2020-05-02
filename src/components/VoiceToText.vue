<template>
   <div class="loading">
      <searched />
      <loading ref="loading" v-if="finished" />
   </div>
</template>

<script>
import Searched from "@/components/Searched";
import Loading from "@/components/Loading";
import { gsap } from "gsap";
import { mapGetters } from "vuex";

export default {
   name: "Home",
   components: {
      Searched,
      Loading,
   },
   computed: {
      ...mapGetters(["voiceAnimationEnd"]),
   },
   data() {
      return {
         finished: true,
      };
   },
   methods: {
      hide() {
         setTimeout(() => {
            this.finished = false;
            gsap.to(".loading", {
               duration: 0.3,
               y: -50,
               opacity: 0,
               onComplete: () => {
                  this.$store.dispatch("updateVoiceAnimationEnd", true);
               },
            });
         }, 2000);
      },
   },
   mounted() {
      this.hide();
   },
};
</script>

<style lang="scss" scoped>
.loading {
   width: 50%;
   height: 40%;
   margin: auto;
   font-size: 1.5em;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   align-self: center;
   color: $textColorLight;
}
</style>
