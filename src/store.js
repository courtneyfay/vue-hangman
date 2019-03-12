import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'http://flask-hangman-api.herokuapp.com'

axios.defaults.withCredentials = true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordToGuess: [],
    guesses: [],
    gameStatus: ''
  },
  getters: {
    getWordToGuess: state => state.wordToGuess,
    getGuesses: state => state.guesses
  },
  mutations: {
    updateWordToGuess(state, word) {
      state.wordToGuess = word
    },
    updateGuesses(state, guesses) {
      state.guesses = guesses
    },
    updateGameStatus(state, status) {
      state.gameStatus = status
    }
  },
  actions: {
    startNewGame({ commit }) {
      const url = `${baseUrl}/new_game`
      axios.get(url).then(response => {
        const wordToGuess = response.data.new_state.word_so_far

        commit('updateWordToGuess', wordToGuess)
      })
    },
    postGuess({ commit }, letter) {
      const url = `${baseUrl}/guess/${letter}`
      axios
        .get(url)
        .then(response => {
          const guesses = response.data.new_state.guesses
          const wordToGuess = response.data.new_state.word_so_far
          const actualWord = response.data.new_state.actual_word

          console.log('guesses', guesses)
          commit('updateWordToGuess', wordToGuess)
          commit('updateGuesses', guesses)

          if (actualWord) {
            commit('updateWordToGuess', actualWord)
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
