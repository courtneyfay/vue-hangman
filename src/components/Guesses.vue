<template>
  <div>
    <div class="guess">Guesses Left: {{ guessesLeft }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    guesses() {
      return this.$store.getters.getGuesses
    },
    wordToGuess() {
      return this.$store.getters.getWordToGuess
    },
    guessesLeft() {
      return this.wordToGuess.length - this.guesses.length
    }
  }
}
</script>

<style scoped>
.guesses {
  display: inline-block;
}

.guess {
  color: lightskyblue;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
