<template>
 
      <div class="chronometer">
          <h2>{{ chronometer.action }}</h2> 

          <p>{{ chronometer.display }}</p>
          <h2>{{chronometer.counter}}/{{repetition}}</h2>
    </div>  
  
    
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'hello',
  computed: {
    ...mapState([
      'repetition',
      'chronometer'
    ])
  }
}
</script>

<style>

.chronometer {
    font-size: 7em;
    text-align: center;
 }
    
</style>
