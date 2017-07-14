<template>
    <v-card>
      <v-container flex>
       <v-card-title primary-title>
          <h5>Configuration <v-icon>settings</v-icon></h5>
        </v-card-title>
        
        
        <v-card-text>
           <v-slider :value="preper" @input="setPreper" step="5" label="Preper" thumb-label snap></v-slider>
           <h5>{{preper}} sec</h5>
        </v-card-text>

        
        <v-card-text>
           <v-slider :value="workout" @input="setWorkout" step="5" label="Workout" thumb-label snap></v-slider>
           <h5>{{workout}} sec</h5>
        </v-card-text>

        
        <v-card-text>
           <v-slider :value="interval" @input="setInterval" step="5" label="Interval" thumb-label snap></v-slider>
           <h5>{{interval}} sec</h5>
        </v-card-text>

        
        <v-card-text>
           <v-slider :value="repetition" 
                    @input="setRepetition" 
                    step="1" 
                    label="Repetition" 
                    thumb-label
                    max="10"
                    snap></v-slider>
                    <h5>{{repetition}} x</h5>
        </v-card-text>

      </v-container>
    </v-card>
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
