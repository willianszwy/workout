<template>
  <div class="hello">
   
    
    <div class="progress-center my-5">
          <h2 class="text-xs-center">{{ chronometer.action }}</h2> 
          <p class="progress-text">{{ chronometer.display }}</p>
          <h5 class="text-xs-center">{{chronometer.counter}}/{{repetition}}</h5>
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
  methods: {
    start () {
      this.$store.dispatch('chronometer/run')
    },
    stop () {
      this.$store.commit('chronometer/stop')
    },
    reset () {
      this.$store.commit('chronometer/reset')
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
