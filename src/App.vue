<template>
   <div id="app">
      <voice-to-text v-if="!voiceAnimationEnd" />
      <header v-show="voiceAnimationEnd">
         <img ref="btnImg" src="@/assets/img/button-el.png" />
         <searched ref="searched" />
      </header>
      <div v-show="voiceAnimationEnd" class="container">
         <info-card
            :id="'infoCard' + index"
            draggable
            v-for="(invoice, index) in invoices"
            :key="invoice.id"
            :info="invoice"
            class="info-card"
            :class="invoice.active && 'active'"
         />
      </div>
   </div>
</template>

<script>
import Searched from "@/components/Searched";
import VoiceToText from "@/components/VoiceToText";
import InfoCard from "@/components/InfoCard";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { mapGetters } from "vuex";
export default {
   name: "App",
   components: { Searched, VoiceToText, InfoCard },
   computed: {
      ...mapGetters(["voiceAnimationEnd"]),
   },
   data() {
      return {
         invoices: [
            { id: 1, name: "Invoice 1", active: true },
            { id: 2, name: "Invoice 2", active: false },
            { id: 3, name: "Invoice 3", active: false },
            { id: 4, name: "Invoice 4", active: false },
         ],
      };
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
      dragAnimation() {
         const rearrangeInvoices = () => {
            this.invoices.map((el, index) => {
               if (index !== 1) {
                  el.active = false;
               } else {
                  el.active = true;
               }
            });
            const firstEl = this.invoices.splice(0, 1);
            this.invoices.push(firstEl);
            console.log(this.invoices);
         };

         gsap.registerPlugin(Draggable);
         Draggable.create(`.info-card`, {
            type: "y",
            inertia: false,
            cursor: "context-menu",
            activeCursor: "context-menu",
            dragResistance: 0.8,
            zIndexBoost: false,
            onDragEnd() {
               if (this.y <= -20 || this.y >= 20) {
                  gsap.to(".active", {
                     duration: 0.5,
                     opacity: 0.15,
                     scale: 0.72,
                     y: 105,
                  });
                  rearrangeInvoices();
               } else {
                  gsap.to(".active", {
                     duration: 0.5,
                     y: 0,
                  });
               }
            },
         });
         // this.invoices.forEach((el, index) => {
         //    Draggable.create(`#infoCard${index}`, {
         //       type: "y",
         //       inertia: false,
         //       cursor: "context-menu",
         //       activeCursor: "context-menu",
         //       dragResistance: 0.8,
         //       zIndexBoost: false,
         //       onDragEnd() {
         //          if (this.y <= -20 || this.y >= 20) {
         //             gsap.to(".active", {
         //                duration: 0.5,
         //                opacity: 0.15,
         //                scale: 0.72,
         //                y: 105,
         //             });
         //             rearrangeInvoices();
         //          } else {
         //             gsap.to(".active", {
         //                duration: 0.5,
         //                y: 0,
         //             });
         //          }
         //       },
         //    });
         // });
      },
   },
   mounted() {
      this.dragAnimation();
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
      position: absolute;
      &.active {
         opacity: 1 !important;
         transform: translateX(0);
         scale: 1;
      }
      @for $i from 1 through 3 {
         &:not(.active):nth-child(#{$i + 1}) {
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
