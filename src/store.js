import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'http://flask-hangman-api.herokuapp.com'

axios.defaults.withCredentials = true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameStatus: true,
    guesses: [],
    wordToGuess: []
  },
  getters: {
    getGuesses: state => state.guesses,
    getWordToGuess: state => state.wordToGuess,
    getGameStatus: state => state.gameStatus
  },
  mutations: {
    updateGameStatus(state, status) {
      state.gameStatus = status
    },
    updateGuesses(state, guesses) {
      state.guesses = guesses
    },
    updateWordToGuess(state, word) {
      state.wordToGuess = word
    }
  },
  actions: {
    postGuess({ commit }, letter) {
      const url = `${baseUrl}/guess/${letter}`
      axios
        .get(url)
        .then(response => {
          const guesses = response.data.new_state.guesses
          const wordToGuess = response.data.new_state.word_so_far
          const actualWord = response.data.new_state.actual_word

          commit('updateGuesses', guesses)
          commit('updateWordToGuess', wordToGuess)

          if (actualWord) {
            commit('updateWordToGuess', actualWord)
            commit('updateGameStatus', false)
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    startNewGame({ commit }) {
      const url = `${baseUrl}/new_game`
      axios.get(url).then(response => {
        const wordToGuess = response.data.new_state.word_so_far

        commit('updateWordToGuess', wordToGuess)
      })
    }
  }
})
