;('use strict')

const store = require('../store.js')
const signIn = function (data) {
	return $.ajax({
		method: 'POST',
		url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
		data,
	})
}

const signUp = function (data) {
	return $.ajax({
		method: 'POST',
		url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
		data,
	})
}

const signOut = function () {
	return $.ajax({
		method: 'DELETE',
		url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
	})
}

module.exports = {
	signIn,
	signUp,
	signOut,
}
