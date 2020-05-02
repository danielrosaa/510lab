import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      voiceAnimationEnd: false,
   },
   getters: {
      voiceAnimationEnd: (state) => {
         return state.voiceAnimationEnd;
      },
   },
   mutations: {
      voiceAnimationEnd: (state, payload) => {
         state.voiceAnimationEnd = payload;
      },
   },
   actions: {
      updateVoiceAnimationEnd(context, payload) {
         context.commit("voiceAnimationEnd", payload);
      },
   },
});
