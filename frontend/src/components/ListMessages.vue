<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(message, index) in $store.state.messages" :key="message" :to="`ViewMessage/`+index">
            <v-list-item-content>
              <v-list-item-title v-text="message"></v-list-item-title>
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
    this.$store.dispatch('getMessages');
  }
}
</script>