<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>View Messages</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{messageBody}}
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      messageBody: ""
    };
  },
  async created() {
    var messageid = this.$route.params.id;
    this.messageBody = (await axios.get(`http://localhost:8880/messages/${messageid}`)).data;
  },
};
</script>