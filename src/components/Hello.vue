<template>
  <div class="hello">
    
    <div class="progress-circular-center">  
    
        <v-progress-circular
          v-bind:size="380"
          v-bind:width="50"
          v-bind:rotate="-90"
          v-bind:value="value"
          class="teal--text my-5">
        
          <p class="progress-circular-text">{{ timeLabel }}</p>

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
  </div>  
</template>

<script>

import Timer from 'easytimer'

export default {
  name: 'hello',
  data () {
    return {
      timer: new Timer(),
      value: 100,
      timeLabel: '00:00'
    }
  },
  methods: {
    reset () {
      this.timer.stop()
      this.timeLabel = '00:00'
      this.value = 100
    },
    start () {
      this.timer.start({countdown: true,
        startValues: {seconds: 20}})
      this.timer.addEventListener('secondsUpdated', this.updateLabel)
    },
    stop () {
      this.timer.pause()
    },
    updateLabel (timeCounter) {
      this.timeLabel = this.timer.getTimeValues().toString(['minutes', 'seconds'])
      this.value = (this.timer.getTotalTimeValues().seconds / 20) * 100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style land="scss">

 .progress-circular-center {
   display: flex;
   justify-content: center;
 }

 .progress-circular-text {
    font-size: 7em;
 }


</style>
