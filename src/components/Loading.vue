<template>
   <img ref="loading" src="@/assets/img/loading.svg" alt="Loading" />
</template>

<script>
import { gsap } from "gsap";
export default {
   data() {
      return {};
   },
   mounted() {
      let animation = gsap.to(this.$refs.loading, {
         duration: 2,
         ease: "none",
         rotate: 360,
         onComplete: () => {
            animation.restart();
         },
      });
      animation;
   },
};
</script>

<style lang="scss" scoped>
img {
   width: 40%;
   height: 40%;
}
.loading {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: 5px solid $textColor;
}
</style>
