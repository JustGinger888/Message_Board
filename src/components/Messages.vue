<template>
  <div>
    <h1>Messages</h1>
    <ul v-for="message in messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: ["Hello, Hi"]
    }
  }
}
</script>