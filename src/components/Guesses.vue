<template>
  <div>
    <div class="diagram">
      <img src="../assets/man.png" class="dude" :style="{ 'bottom': setBottom }">
      <div class="water"></div>
    </div>
    <div class="guess teal--text text--lighten-3">Guesses Left: {{ guessesLeft }}</div>
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
    },
    setBottom() {
      const drownProportion = this.guessesLeft / 6
      const startingPosition = -200
      const pixels = `${startingPosition + 200 * drownProportion}px`

      return pixels
    }
  }
}
</script>

<style scoped>
.guesses {
  display: inline-block;
}

.guess {
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.diagram {
  /* background-color: pink; */
  display: block;
}

.water {
  background-color: #40e0d0;
  height: 200px;
  opacity: 0.7;
  width: 500px;
}

.dude {
  height: 200px;
  position: relative;
  width: 100px;
}
</style>
