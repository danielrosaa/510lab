<template>
   <div class="container">
      <div class="info-card">
         <info-card />
      </div>
   </div>
</template>

<script>
// import Searched from "@/components/Searched";
import InfoCard from "@/components/InfoCard";
import { gsap } from "gsap";
export default {
   name: "InvoiceInfo",
   components: {
      //   Searched,
      InfoCard,
   },
   mounted() {
      gsap
         .timeline({ defaults: { duration: 1 } })
         .from(this.$refs.btnImg, { opacity: 0 });
      //  .to(this.$refs.searched, { x: -50 });
   },
};
</script>

<style lang="scss" scoped>
.container {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   .info-card {
      height: 100%;
      display: flex;
      justify-self: center;
      align-self: center;
      align-items: center;
   }
}
</style>
