<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="userName"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <v-btn class="mr-4" @click="register"> Register </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        this.$store.dispatch("register", {
          userName: this.userName,
          password: this.password,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
