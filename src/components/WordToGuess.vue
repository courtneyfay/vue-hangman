<template>
  <section class="word-to-guess">
    <div v-for="(character, index) in wordToGuess" :key="index">
      <div class="character">{{ character }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      wordToGuess: this.$store.state.wordToGuess
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
  color: turquoise;
  font-size: 4em;
  font-weight: bold;
  margin: 0 6px;
}
</style>
