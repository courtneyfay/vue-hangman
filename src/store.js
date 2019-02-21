import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'http://flask-hangman-api.herokuapp.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordToGuess: [],
    guesses: [],
    gameStatus: ''
  },
  getters: {
    getWordToGuess: state => state.wordToGuess
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
      const path = `/guess/${letter}`
      const http = axios.create({
        baseUrl,
        headers: { 'Cache-Control': 'no-cache' },
        PostmanToken: 'bd386705-da6b-5bd9-b4df-f68b6e48a70b'
        //Cache-Control: no-store, no-cache, no-transform, must-revalidate, max-age=0
      })
      //using http://10.0.9.0:8080/sockjs-node/info?t=1550720569625
      //GET /guess/a HTTP/1.1
      // Host: flask-hangman-api.herokuapp.com
      // Cache-Control: no-cache
      // Postman-Token: 1bb3a3e4-b052-e6dc-9d11-c9d2e1ac8d2c
      // 400 error
      // {
      //   "code": "no_game_in_progress",
      //   "message": "Couldn't find a game for you. Please visit /new_game"
      // }

      http.get(path).then(response => {
        console.log('response', response)

        // const wordToGuess = response.data.new_state.word_so_far
        // const guesses = response.data.new_state.guesses
        // const status = response.data

        // commit('updateWordToGuess', wordToGuess)
        // commit('updateGuesses', guesses)
        // commit('updateGameStatus', status)
      })
    }
  }
})
