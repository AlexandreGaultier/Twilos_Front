<template>
  <v-form v-model="valid">
    <v-container>

        <!-- Inscription -->
      <v-row >
        <v-col
          cols="12"
          md="4"
        >
        <h2 align="center">Inscription</h2>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

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
          <router-link to="/login"><v-btn>Se connecter</v-btn></router-link>
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


