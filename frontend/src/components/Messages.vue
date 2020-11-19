<template>
  <div>
    <h1 class="display-1">Messages</h1>

    <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="message in messages"
          :key="message"
        >
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      messages: ["Hello", "Hi", "bye"]
    }
  },
  async created() {
    console.log("Created");
    this.messages = (await axios.get('http://localhost:8880/messages')).data;

  },
}
</script>