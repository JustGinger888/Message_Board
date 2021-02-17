<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>View Messages</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{ message.text }}
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  async created() {
    try {
      this.message = (
        await this.$store.dispatch("getMessage", this.$route.params.id)
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>