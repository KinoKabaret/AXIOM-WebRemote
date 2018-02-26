import Vue from 'vue'
import Vuex from 'vuex'
import settings from './settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings
  }
})

// this is for hotloading changes in dev
if (process.env.DEV && module.hot) {
  module.hot.accept(['./settings'], () => {
    const newShowcase = require('./settings').default
    store.hotUpdate({ modules: { showcase: newShowcase } })
  })
}

export default store
