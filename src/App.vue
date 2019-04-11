<template>
  <div id="app" class="black--text">
    <game v-if="getGameStatus"/>
    <game-over v-else/>
  </div>
</template>

<script>
import Game from './views/Game'
import GameOver from './views/GameOver'

export default {
  components: {
    Game,
    GameOver
  },
  computed: {
    getGameStatus() {
      return this.$store.getters.getGameStatus
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
