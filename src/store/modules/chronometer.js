import Timer from 'easytimer'

export default {
  state: {
    timer: new Timer(),
    display: '00:00',
    startValue: 0,
    running: false
  },
  mutations: {
    end (state) {
      state.running = false
    },
    update (state) {
      state.display = state.timer.getTimeValues().toString(['minutes', 'seconds'])
    },
    stop (state) {
      state.timer.pause()
      state.running = false
    },
    reset (state) {
      state.timer.stop()
      state.display = '00:00'
      state.startValue = 0
      state.running = false
    }
  },
  actions: {
    start ({ state, commit, rootState }) {
      if (!state.timer.isRunning()) {
        state.startValue = rootState.workout
        state.running = true

        state.timer.start({countdown: true,
          startValues: {seconds: state.startValue},
          callback: function () {
            commit('update')
          }})
        state.timer.addEventListener('targetAchieved', function (e) {
          commit('end')
        })
      }
    }
  }
}
