<template>
  <div>
    <div class="diagram">
      <img src="../assets/man.png" class="dude">
      <div class="water" :style="{ 'bottom': setBottom }"></div>
    </div>
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
    },
    setBottom() {
      return `${200 - 200 * (this.guessesLeft / 6)}px`
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

.diagram {
  /* background-color: pink; */
  display: block;
}

.water {
  background-color: #40e0d0;
  height: 200px;
  opacity: 0.7;
  position: relative;
  width: 500px;
}

.dude {
  height: 200px;
  width: 100px;
}
</style>
