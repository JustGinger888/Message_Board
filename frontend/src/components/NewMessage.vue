<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New Messages</v-toolbar-title>
      </v-toolbar>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
              <v-btn class="mr-4" @click="submit"> Submit </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageBody: "",
    };
  },
  methods: {
    async submit() {
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = this.$store.state.token; // Adding Auth Token To Avoid Page Reload Loss
        this.$store.dispatch("newMessage", this.messageBody);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
