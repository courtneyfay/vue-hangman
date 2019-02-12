<template>
  <div class="new-game">
    <button @click="startNewGame" class="new-game-button">New Game</button>
  </div>
</template>

<script>
import router from '../router.js'

export default {
  methods: {
    startNewGame() {
      this.$store.dispatch('startNewGame').then(router.push('/play'))
    }
  }
}
</script>

<style scoped>
.new-game-button {
  background-color: hotpink;
  border-color: hotpink;
  color: #2c3e50;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
