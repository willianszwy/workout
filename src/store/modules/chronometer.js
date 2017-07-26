import Timer from 'easytimer'

export default {
  namespaced: true,
  state: {
    timer: new Timer(),
    display: '00:00',
    action: 'PRESS START',
    running: false,
    counter: 0
  },
  mutations: {
    end (state) {
      state.running = false
    },
    beep (state) {
      document.querySelector('audio#beep').play()
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
    },
    action (state, action) {
      state.action = action
    },
    increment (state) {
      state.counter++
    },
    clear (state) {
      state.counter = 0
      state.action = 'PRESS START'
    }
  },
  actions: {
    start ({ state, commit, rootState }, startValue) {
      state.running = true
      if (state.timer.isPaused()) {
        state.timer.start()
      } else if (!state.timer.isRunning()) {
        state.timer.start({countdown: true,
          startValues: {seconds: startValue},
          callback: function () {
            commit('update')
          }})
        state.timer.addEventListener('started', function (e) {
          commit('beep')
        })
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
    },
    run ({ commit, dispatch, rootState }) {
      commit('action', 'PREPARE')
      dispatch('start', rootState.preper).then(resolve => {
        dispatch('loop')
      })
    },
    async loop ({ state, commit, dispatch, rootState }) {
      for (let repetitionCount = 0; repetitionCount < rootState.repetition; repetitionCount++) {
        commit('increment')
        commit('action', 'WORKOUT')
        await dispatch('start', rootState.workout)
        commit('action', 'REST')
        await dispatch('start', rootState.interval)
      }
      commit('clear')
    }
  }
}
