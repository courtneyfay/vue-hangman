<template>
  <div class="game">
    <Header/>
    <WordToGuess class="pull-left"/>
    <Guesses class="pull-right"/>
    <Keyboard @select-key="addToGuesses"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Guesses from '@/components/Guesses.vue'
import Header from '@/components/Header.vue'
import Keyboard from '@/components/Keyboard.vue'
import WordToGuess from '@/components/WordToGuess.vue'

export default {
  name: 'game',
  data() {
    return {
      guesses: []
    }
  },
  components: {
    Footer,
    Guesses,
    Header,
    Keyboard,
    WordToGuess
  },
  beforeMount() {
    this.$store.dispatch('startNewGame')
  },
  methods: {
    addToGuesses(letter) {
      const indexOf = this.guesses.indexOf(letter)

      if (indexOf === -1) {
        this.guesses.push(letter)
        this.$store.dispatch('postGuess', letter)
      }
    }
  }
}
</script>

<style lang="scss">
.game {
  .pull-left {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 49%;
  }
  .pull-right {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 49%;
  }
}
</style>
