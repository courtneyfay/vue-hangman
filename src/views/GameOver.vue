<template>
  <div class="game-over">
    <h1>This is a Game Over page</h1>
    <WordToGuess />
  </div>
</template>

<script>
import WordToGuess from '@/components/WordToGuess.vue'

export default {
  components: {
    WordToGuess
  }
}
</script>
