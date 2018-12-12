import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
})

//guess.js
/*const request = require('request')
const API_URL = 'http://flask-hangman-api.herokuapp.com/'

let guess = (req, res) => {
	let letter = req.body.letter
	let newUrl = API_URL + "guess/" + letter
	console.log(newUrl)
	
	let options = {
		method: 'GET',
		url: newUrl
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let result = res.json(JSON.parse(body))
			console.log(body)
			return result
		}
		return response.statusCode || 500
	})
}

module.exports = guess */

//newgame.js
/*const request = require('request')
const API_URL = 'http://flask-hangman-api.herokuapp.com/'

let newGame = (req, res) => {
	let options = {
		method: 'GET',
		url: API_URL
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let result = res.json(JSON.parse(body))
			// console.log(body)
			return result
		}
		return response.statusCode || 500
	})
}

module.exports = newGame */
