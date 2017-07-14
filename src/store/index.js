import Vue from 'vue'
import Vuex from 'vuex'
import Timer from 'easytimer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    preper: 0,
    workout: 20,
    interval: 0,
    repetition: 0,
    timer: new Timer(),
    chronometer: { time: '00:00', percent: 100 }
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
    },
    updateChronometer (state) {
      state.chronometer.time = state.timer.getTimeValues().toString(['minutes', 'seconds'])
      state.chronometer.percent = (state.timer.getTotalTimeValues().seconds / state.workout) * 100
    },
    stop (state) {
      state.timer.pause()
    },
    reset (state) {
      state.timer.stop()
      state.chronometer = { time: '00:00', percent: 100 }
    }
  },
  actions: {
    start ({ state, commit }) {
      if (!state.timer.isRunning()) {
        state.timer.start({countdown: true,
          startValues: {seconds: state.workout},
          callback: function () {
            commit('updateChronometer')
          }})
      }
    }
  }
})

