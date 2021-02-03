<template>
  <!-- App.vue -->

<v-app>
  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid class="py-8 px-6">
      <v-row>
           <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card flat :color="item.color" class="mx-auto" max-width="400">

                <v-card-title>
                  <v-avatar color="white" class="mr-4"><img :src="item.avatar"/></v-avatar>
                  <span class="title font-weight-light" v-text="item.pseudo"></span>
                </v-card-title>
                <v-card-text> 
                  <div class="text--primary" v-text="item.post">
                  </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn icon><v-icon class="mr-1" color="red"> mdi-heart</v-icon></v-btn>
                    <span class="subheading mr-2" v-text="item.like"></span>
                    <span class="mr-1">·</span>
                    <v-btn icon><v-icon class="mr-1" color="#0C7ABF"> mdi-comment-text</v-icon></v-btn>
                    <span class="subheading" v-text="item.commentaires"></span>
                </v-card-actions>
                
            </v-card>
        </v-col>
      </v-row>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  
</v-app>
</template>

<script>

  export default {
   data: () => ({
    items: [
      {
        color: 'grey',
        avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609931021-discord-mq42fprq3e.png',
        pseudo: 'Justin ^^',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam :) ',
        like: '1',
        commentaires: '1',
      },
      {
        color: 'grey',
        avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609930995-opera-zjhdex3yyo.png',
        pseudo: 'Martin XD',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        like: '9859',
        commentaires: '250',
      },
    ],
  }),
  }
</script>


