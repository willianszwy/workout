import Vue from 'vue'
import Vuex from 'vuex'
import chronometer from './modules/chronometer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    preper: 5,
    workout: 10,
    interval: 5,
    repetition: 3
  },
  modules: {
    chronometer
  },
  mutations: {
    setPreper (state, value) {
      state.preper = value
    },
    setWorkout (state, value) {
      state.workout = value
    },
    setInterval (state, value) {
      state.interval = value
    },
    setRepetition (state, value) {
      state.repetition = value
    }
  }
})
