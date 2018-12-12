<template>
  <div>
    <h1>Keyboard</h1>
    <!-- use v-for -->
    <Key/>
  </div>
</template>

<script>
import Key from '@/components/Key.vue'

export default {
  name: 'Keyboard',
  components: {
    Key
  }
}
</script>

<style scoped>
h1 {
  background-color: black;
}
</style>
