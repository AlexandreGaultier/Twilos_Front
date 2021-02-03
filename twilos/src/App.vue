<template>
  <v-app>

    <!-- Barre de navigation du haut -->
    <v-app-bar color="#2599A8" app>
    <v-btn icon>
      <v-icon style="font-size:3rem">mdi-account-plus</v-icon>
    </v-btn>
    <div class="flex justify-center">
      <v-avatar
              class="mx-2"
              color="grey darken-1"
              max-height="56"
              max-width="56"
              contain
            >
            <img :src="navbar.img"/>
      </v-avatar>
    </div>

     <v-btn icon>
      <v-icon style="font-size:3rem">mdi-menu</v-icon>
      </v-btn>
  </v-app-bar>

    <!-- Contenu -->
    <v-main>
      <Home/>
    </v-main>

    <!-- Barre de navigation du bas -->
    <v-bottom-navigation v-model="value" :background-color="'#2599A8'" grow app>
    <!-- -->
    <v-btn value="home" >
        <v-icon style="font-size:3rem">mdi-home</v-icon>
      </v-btn>

    <v-btn value="tweet">
        <v-icon style="font-size:3rem">mdi-plus-circle-outline</v-icon>
      </v-btn>

      <v-btn value="private-message">
        <v-icon style="font-size:3rem">mdi-email</v-icon>
      </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
//import timeline from './components/timeline';
//import profil from './components/profil';
//import tweet from './components/tweet';
import Home from './components/Home';
Home

export default {
  name: 'App',

  components: {
    Home,
    //timeline,
    //profil,
    //tweet,
  },

  data: () => ({
    navbar: {
      img: "https://image.noelshack.com/fichiers/2021/01/3/1609939912-opera-i6vxo8dxag.png",
    }
  }),
};
</script>

<style scoped>

.flex {
  display: flex;
}

</style>
