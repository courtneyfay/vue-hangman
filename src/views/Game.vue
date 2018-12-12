<template>
  <div class="game">
    <Header/>
    <WordToGuess/>
    <Guesses/>
    <Keyboard/>
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
  components: {
    Footer,
    Guesses,
    Header,
    Keyboard,
    WordToGuess
  }
}
</script>
