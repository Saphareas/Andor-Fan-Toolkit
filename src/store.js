import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    story: {
      title: "New Campaign",
      cards:[{cardIndex:"New Card", cardText:""}]
    },
    events: {},
    fog: {}
  },
  mutations: {
    updateStory (state, payload) {
      state.story = payload
    },
    updateStoryTitle (state, newTitle) {
      state.story.title = newTitle
    },
    updateStoryCardIndex (state, payload) {
      state.story.cards[payload.index].cardIndex = payload.newValue
    },
    updateStoryCardText (state, payload) {
      state.story.cards[payload.index].cardText = payload.newValue
    },
    addStoryCard (state) {
      let newCard = {cardIndex:"", cardText:""};
      state.story.cards.push(newCard);
    },
    updateEvents (state, payload) {
      state.events = payload
    },
    updateFog (state, payload) {
      state.fog = payload
    },
    reset () {
      this.commit("updateStory", {
        title: "New Campaign",
        cards:[{cardIndex:"New Card", cardText:""}]
      });
      this.commit("updateEvents", {});
      this.commit("updateFog", {});
    }
  },
  actions: {

  }
})
