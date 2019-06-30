import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: function() {
    return {
      story: {
        title: "New Campaign",
        cards:[{index:"New Card", text:""}]},
      events: {},
      fog: {}
    }
  }
}).$mount('#app')
