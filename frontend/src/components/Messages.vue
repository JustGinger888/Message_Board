<template>
  <div>
    <h1 class="display-1">Messages</h1>

    <v-list dense>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="message in messages"
          :key="message"
          v-on:click="c"
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
export default {
  data() {
    return {
      messages: ["Hello", "Hi"]
    }
  }
}
</script>