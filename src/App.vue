<template>
  
  <v-app  standalone>
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute>

    </v-navigation-drawer>
    
    <v-toolbar fixed class="light-blue" prominent dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Workout</v-toolbar-title>
    </v-toolbar>
    <main>

      <v-container>
         <router-view></router-view>
      </v-container>
    </main>


     
  </v-app>

</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      mini: false
    }
  }
}
</script>

<style>

html { overflow-y: auto; }  

</style>
