<template>
  <!-- App.vue -->
  <v-app>
     <!-- Sizes your content based upon application components -->
    <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid class="py-8 px-6">
      <v-row >
        <v-col cols="12">
            <span class="title">Ecrire un tweet</span>
            <v-card flat color="#EEEEEE" >
            <v-textarea color="teal" outlined label="Tweet">
              </v-textarea>
              </v-card>
            <v-btn icon><v-icon>mdi-image-plus</v-icon></v-btn>
        </v-col>
      </v-row>
      <v-btn>Poster le tweet</v-btn>
    </v-container>
    </v-main>
</v-app>
</template>