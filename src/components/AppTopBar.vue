<template>
  <div class="app-top-bar">
    <v-app-bar class="bar" color="red" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red text--accent-4">

        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/listaexboyfriends">  
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista de Ex-Boyfriends</v-list-item-title>
          </v-list-item>
        </router-link>  


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppTopBar',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
 
<style scoped>
.bar {
  max-width: 100vh;
  min-width: 100vh;
}
</style>