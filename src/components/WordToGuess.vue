<template>
  <section class="word-to-guess">
    <div v-for="(character, index) in wordToGuess" :key="index">
      <div class="character teal--text text--lighten-3">{{ character }}</div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    wordToGuess() {
      return this.$store.getters.getWordToGuess
    }
  }
}
</script>

<style scoped>
.word-to-guess {
  display: flex;
  justify-content: center;
}

.character {
  font-size: 4em;
  font-weight: bold;
  margin: 0 6px;
}
</style>
