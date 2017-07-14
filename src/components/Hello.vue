<template>
  <div class="hello">
    <v-card>
    <v-container>
    <div class="progress-circular-center">  
    
        <v-progress-circular
          v-bind:size="380"
          v-bind:width="50"
          v-bind:rotate="-90"
          v-bind:value="chronometer.percent"
          class="teal--text my-5">
        
          <p class="progress-circular-text">{{ chronometer.time }}</p>

         </v-progress-circular>        
    </div>


    <v-layout row justify-space-between>
       <v-flex xs4>
         <v-btn error block dark large @click.native="stop()">STOP</v-btn>
       </v-flex>
       <v-flex xs4>
        <v-btn 
          success 
          block 
          dark 
          large
          @click.native="start()">START</v-btn>
       </v-flex>
       <v-flex xs4>
         <v-btn block large @click.native="reset()">RESET</v-btn>
       </v-flex> 
    </v-layout>

    <v-layout>
      <v-list two-line>
        <v-list-tile><v-list-tile-content>Preper: {{ preper }}</v-list-tile-content></v-list-tile>
         <v-divider></v-divider>
        <v-list-tile><v-list-tile-content>Workout: {{ workout }}</v-list-tile-content></v-list-tile>
         <v-divider></v-divider>
        <v-list-tile><v-list-tile-content>Interval: {{ interval }}</v-list-tile-content></v-list-tile>
         <v-divider></v-divider>
        <v-list-tile><v-list-tile-content>Repetition: {{ repetition }}</v-list-tile-content></v-list-tile>
      </v-list>
    </v-layout>
    </v-container>
    </v-card>
  </div>  
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'hello',
  methods: {
    ...mapActions(['start']),
    ...mapMutations(['reset', 'stop'])
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

 .progress-circular-center {
   display: flex;
   justify-content: center;
 }

 .progress-circular-text {
    font-size: 7em;
 }


</style>
