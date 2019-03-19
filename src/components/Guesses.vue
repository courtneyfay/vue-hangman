<template>
  <div>
    <div class="guess">Guesses Left: {{ guessesLeft }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    guessesLength() {
      return this.$store.getters.getGuesses.length
    },
    guessesLeft() {
      return 6 - this.guessesLength
    },
    isGameOn() {
      const status = this.guessesLeft !== 0
      return this.$store.commit('updateGameStatus', status)
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
