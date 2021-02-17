<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-btn depressed to="/">List Messages</v-btn>
      <v-btn depressed to="/NewMessage">New Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn depressed v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn depressed v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
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
  }),
};
</script>
