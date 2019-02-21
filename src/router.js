import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import GameOver from './views/GameOver.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/play',
      name: 'Game',
      component: Game
    },
    {
      path: '/game-over',
      name: 'gameover',
      component: GameOver
    }
  ]
})
