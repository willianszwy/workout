import Timer from 'easytimer'

export default {
  namespaced: true,
  state: {
    timer: new Timer(),
    display: '00:00',
    running: false,
    cancel: false
  },
  mutations: {
    end (state) {
      state.running = false
      state.cancel = false
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
      state.running = false
      state.cancel = true
    },
    continue (state) {
      state.timer.start()
      state.running = true
    }
  },
  actions: {
    start ({ state, commit, rootState }, startValue) {
      if (!state.timer.isRunning()) {
        state.running = true

        state.timer.start({countdown: true,
          startValues: {seconds: startValue},
          callback: function () {
            commit('update')
          }})
      }
      return new Promise((resolve, reject) => {
        state.timer.addEventListener('targetAchieved', function (e) {
          commit('end')
          resolve('stopped')
        })
        state.timer.addEventListener('stopped', function (e) {
          reject()
        })
      })
    }
  }
}
