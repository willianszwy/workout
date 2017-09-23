<template>
  
  <v-app toolbar>

    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light >

       
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.path" :href="item.path">       
          <v-list-tile-action>          
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>          
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    
    <v-toolbar fixed class="light-blue" prominent dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Workout</v-toolbar-title>
    </v-toolbar>

    <main>
      <!-- <v-card flat> -->
      <v-container fluid>
         <router-view></router-view>
      </v-container>
     <!-- </v-card> -->
    </main>

    <audio src="static/songs/beep-06.mp3" id="beep"></audio>
     
  </v-app>

</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      mini: false,
      items: [{
        icon: 'alarm',
        name: 'Home',
        path: '#/'
      },
      {
        icon: 'settings',
        name: 'Configuration',
        path: '#/config'
      }]
    }
  }
}
</script>

<style>

html { overflow-y: auto; }

</style>
