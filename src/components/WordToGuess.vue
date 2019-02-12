<template>
  <div>
    <div class="word-to-guess">{{ wordToGuess }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordToGuess: '_ _ _ _ _'
    }
  }
}
</script>

<style scoped>
.word-to-guess {
  color: turquoise;
  font-size: 4em;
  font-weight: bold;
}
</style>
