<template>
  <div class="hello">
   
    
    <div class="progress-center my-5">
          <h2 class="text-xs-center">{{ progressText }}</h2> 
          <p class="progress-text">{{ chronometer.display }}</p>
          <p class="text-xs-center">{{repetitionCount}}/{{repetition}}</p>
    </div>    
   
      <template v-if="chronometer.running">
       <v-layout row wrap>
         <v-flex xs6>
          <v-btn  warning large round block dark @click.native="stop()">PAUSE</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn error round block dark large @click.native="reset()">STOP</v-btn>
          </v-flex>
        </v-layout>
      </template>
      <template v-else>
       <v-layout row wrap>
         <v-flex xs12>
         <v-btn 
          success 
          round
          block
          dark
          large
          @click.native="start()">START</v-btn>
          </v-flex>
        </v-layout>
      </template>
   
  </div>  
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      progressText: '',
      repetitionCount: 0
    }
  },
  methods: {
    start () {
      if (this.chronometer.timer.isPaused()) {
        this.$store.commit('chronometer/continue')
      } else {
        this.progressText = 'PREPARE'
        this.$store.dispatch('chronometer/start', this.preper).then(resolve => {
          this.progressText = 'WORKOUT'
          this.loop()
        }).catch()
      }
    },
    stop () {
      this.$store.commit('chronometer/stop')
    },
    reset () {
      this.clear()
      this.$store.commit('chronometer/reset')
    },
    clear () {
      this.progressText = ''
      this.repetitionCount = 0
    },
    async loop () {
      for (this.repetitionCount = 0; this.repetitionCount < this.repetition; this.repetitionCount++) {
        this.progressText = 'WORKOUT'
        await this.$store.dispatch('chronometer/start', this.workout).catch()
        this.progressText = 'REST'
        await this.$store.dispatch('chronometer/start', this.interval).catch()
      }
      this.clear()
    }
  },
  computed: {
    ...mapState([
      'preper',
      'workout',
      'interval',
      'repetition',
      'chronometer'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

 .progress-center {
   display: flex;
   justify-content: center;
   flex-direction: column;
 }

 .progress-text {
    font-size: 7em;
    text-align: center;
 }


</style>
