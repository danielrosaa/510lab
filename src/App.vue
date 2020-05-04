<template>
   <div id="app">
      <voice-to-text v-if="!voiceAnimationEnd" />
      <div v-show="voiceAnimationEnd" class="container">
         <header v-show="voiceAnimationEnd">
            <img ref="btnImg" src="@/assets/img/button-el.png" />
            <searched ref="searched" />
         </header>
         <div class="cards-container">
            <div class="test-info">
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
            <div class="test-agent">
               <agent-info
                  v-for="agent in agents"
                  :key="agent.code"
                  :agent="agent"
                  class="info-agent"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Searched from "@/components/Searched";
import VoiceToText from "@/components/VoiceToText";
import InfoCard from "@/components/InfoCard";
import AgentInfo from "@/components/AgentInfo";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { mapGetters } from "vuex";
export default {
   name: "App",
   components: { Searched, VoiceToText, InfoCard, AgentInfo },
   computed: {
      ...mapGetters(["voiceAnimationEnd"]),
   },
   data() {
      return {
         agents: [
            {
               nature: "buyer",
               code: "STFF",
               operatingName: "STF France",
               activity: "Local Operations, Manufacturing, Sales, Marketing",
               tradeRegisterNumber: "004101534",
               vat: "1101317918C49",
               iban: "RE11NGB4254456990",
               bicCode: "INGBRA5C",
               address: {
                  street: "Des Benjoins, Rue 2, Saint-Denis",
                  location: "1202 RE, Reunion",
               },
            },
            {
               nature: "seller",
               code: "STFB",
               operatingName: "STF Belgium",
               activity: "Local Operations, Manufacturing, Sales, Marketing",
               tradeRegisterNumber: "190529485",
               vat: "1625368102C54",
               iban: "B19INGB1165807110",
               bicCode: "INGBFR1B",
               address: {
                  street: "Rue Condorcet 163, Moe",
                  location: "1264 BE, Belgium",
               },
            },
         ],
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
      cardsAnimation() {
         const rearrangeInvoices = () => {
            this.invoices.map((el, index) => {
               if (index !== 1) {
                  el.active = false;
               } else {
                  el.active = true;
               }
            });
            const firstEl = this.invoices.splice(0, 1);
            this.invoices.push(firstEl[0]);
         };

         gsap.registerPlugin(Draggable);
         Draggable.create(`.info-card`, {
            type: "y",
            inertia: false,
            cursor: "context-menu",
            activeCursor: "context-menu",
            dragResistance: 0.8,
            zIndexBoost: false,
            onMove() {
               gsap.to("#infoCard0", {
                  clearProps: "all",
                  opacity: 0,
                  scale:
                     this.getDirection() === "up"
                        ? 1 + (this.y / 1000) * -1
                        : 1 + this.y / 1000,
                  y: 105,
               });
            },
            onDragEnd() {
               if (this.y <= -20 || this.y >= 20) {
                  gsap.to("#infoCard0", {
                     clearProps: "all",
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
      },
      moreInfoAnimation() {
         gsap.registerPlugin(Draggable);
         Draggable.create(".cards-container", {
            type: "x",
            inertia: false,
            cursor: "context-menu",
            activeCursor: "context-menu",
            dragResistance: 0.9,
            zIndexBoost: false,
            onDragEnd() {
               console.log(this.getDirection());
               if (this.getDirection() === "left") {
                  gsap.fromTo(
                     ".test-agent",
                     { opacity: 0 },
                     { opacity: 1, display: "inline-flex" }
                  );
                  gsap.to(".test-info", { justifyContent: "end" });
               } else {
                  gsap.to(".test-info", { x: this.x * -1 });
               }
            },
         });
      },
   },
   mounted() {
      this.cardsAnimation();
      this.moreInfoAnimation();
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
   align-items: center;
}
.info-agent-container {
   // display: none;
   // opacity: 0;
   display: inline-flex;
   align-items: center;
   .card:first-child {
      margin-right: 50px;
   }
}
// .info-card-container {
.cards-container {
   width: 100%;
   height: 100%;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 100px;

   .test-info {
      display: inline-flex;
      width: 100%;
      justify-content: center;
   }

   .test-agent {
      display: none;
      // opacity: 0;
      transform: translateX(300px);
      .info-agent:first-child {
         margin-right: 40px;
      }
   }

   .info-card {
      // height: 100%;
      // display: flex;
      justify-self: center;
      align-self: center;
      // align-items: center;
      position: absolute;
      &.active {
         opacity: 1 !important;
         transform: translateX(0) scale(1);
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
