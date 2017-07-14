<template>
  
  <v-app  standalone>
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute>

       <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/84.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
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

      <v-container fluid>
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
