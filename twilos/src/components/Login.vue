<template>
  <v-form v-model="valid">
    <v-container>
        <v-col
          cols="12"
          md="4"
        >
        <h2 align="center">Connexion</h2>
        </v-col>

        <!-- Login -->
      <v-row> 

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <router-link to="/inscription"><v-btn> S'inscrire </v-btn></router-link>
          
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
   data: () => ({
    valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Champs requis.',
        v => v.length <= 10 || 'Le nom doit faire plus de 10 charactèresssdzd',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Champs requis.',
        v => /.+@.+/.test(v) || 'L\'E-mail doit être valide',
      ],
      password: '',
      passwordRules: [
          v => !!v || 'Champs requis.',
        //   v => v.length <= 10 || 'Le nom doit faire plus de 10 charactèresssdzd',
      ]
  }),
  }
</script>


