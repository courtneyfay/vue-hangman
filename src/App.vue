<template>
  <div id="app">
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
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
