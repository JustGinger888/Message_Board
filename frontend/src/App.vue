<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-btn depressed to="/">List Messages</v-btn>
      <v-btn depressed to="/NewMessage">New Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed>Login</v-btn>
    </v-app-bar>

    <v-main>
      <br>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
