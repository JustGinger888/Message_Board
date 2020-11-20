<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>

      <v-list dense>
        <v-list-item-group color="primary">
          <!--Looping through data and Creating list with associated link-->
          <v-list-item
            v-for="(message, index) in $store.state.messages"
            :key="index"
            :to="`ViewMessage/` + index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="message.text"></v-list-item-title>
              <v-list-item-subtitle
                v-text="message.user"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  async created() {
    try {
      this.$store.dispatch("getMessages");
    } catch (error) {
      console.log(error);
    }
  },
};
</script>