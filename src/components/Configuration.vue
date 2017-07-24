<template>
  <div>      
        
        <v-card-text>
           <v-slider :value="preper" @input="setPreper" step="5" label="Preper" thumb-label snap></v-slider>
           <p>{{preper}} sec</p>
       
           <v-slider :value="workout" @input="setWorkout" step="5" label="Workout" thumb-label snap></v-slider>
           <p>{{workout}} sec</p>
        
           <v-slider :value="interval" @input="setInterval" step="5" label="Interval" thumb-label snap></v-slider>
           <p>{{interval}} sec</p>
       
           <v-slider :value="repetition" 
                    @input="setRepetition" 
                    step="1" 
                    label="Repetition" 
                    thumb-label
                    max="10"
                    snap></v-slider>
                    <p>{{repetition}} x</p>
        </v-card-text>

      </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
      computed: {
        ...mapState(['workout', 'preper', 'interval', 'repetition', 'chronometer'])
      },
      methods: {
        ...mapMutations([
          'setPreper',
          'setWorkout',
          'setInterval',
          'setRepetition'
        ]),
        ...mapActions(['start'])
      }
    }
</script>

<style>
    
</style>
