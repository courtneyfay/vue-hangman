import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'http://flask-hangman-api.herokuapp.com/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordToGuess: [],
    gameStatus: ''
  },
  mutations: {
    updateWordToGuess(state, word) {
      this.state.wordToGuess = word
    },
    updateGameStatus(status) {
      this.state.gameStatus = status
    }
  },
  actions: {
    startNewGame({ commit }) {
      const url = baseUrl
      axios.get(url).then(response => {
        const wordToGuess = response.data.new_state.word_so_far
        commit('updateWordToGuess', wordToGuess)
      })
    },
    postGuess(letter) {
      const url = `${baseUrl}/guess/${letter}`
      //call guess API endpoint
      //GET request
      //with response: update wordToGuess, update guess_result
      //this.store.commit('updateWordToGuess', wordToGuess)
      //this.store.commit('updateGameStatus', status)
    }
  }
})
