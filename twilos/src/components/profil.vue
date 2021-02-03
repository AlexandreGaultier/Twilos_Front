<template>
  <!-- App.vue -->
  <v-app>
     <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid class="py-8 px-6">
      <v-row >
        <v-col cols="12">
          <v-card flat color="grey" class="mx-auto" max-width="400">
            <v-card-title >
              <v-avatar color="white" class="mr-4"><img :src="profil.avatar"/></v-avatar>
              <span class="title" v-text="profil.pseudo"></span>
            </v-card-title>
            <v-card-subtitle>
              <v-spacer></v-spacer>
              <span v-text="profil.mail"></span>
            </v-card-subtitle>
             <v-card-text> 
                  <div class="text--primary" v-text="profil.description">
                  </div>
                </v-card-text>
          </v-card>
        </v-col>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card flat color="grey" class="mx-auto" max-width="400">
           <v-card-subtitle>
                  <span class="font-weight-light" v-text="item.date"></span>
                </v-card-subtitle>
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
    </v-container>
  </v-main>
  </v-app>

</template>

<script>

  export default {
   data: () => ({
    items: [
      {
        post: 'Lorem ipsum dolor sit amet ! ',
        date: '12/10/2020',
        like: '1',
        commentaires: '1',
      },
      {
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor XD',
        date: '15/11/2020',
        like: '9859',
        commentaires: '250',
      },
    ],
    profil: {
      pseudo: 'Martin',
      mail: 'martin.epsi@epsi.fr',
      description: 'salut à tous les amis comment ça va ahahahahaha',
      avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609931021-discord-mq42fprq3e.png',
    }
  }),
  }
</script>

