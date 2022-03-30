const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignIn = function (event) {
	event.preventDefault()
	console.log('now here')

	const form = event.target
	const data = getFormFields(form)
	console.log(data)

	authApi
		.signIn(data)
		.then(() => authUi.onSignInSuccess())
		.catch(() => authUi.onSignInFailure())
}

const onSignUp = function (event) {
	event.preventDefault()
	console.log('now here')

	const form = event.target
	const data = getFormFields(form)
	console.log(data)

	authApi
		.signUp(data)
		.then(() => authUi.onSignUpSuccess())
		.catch(() => authUi.onSignUpFailure())
}

const onSignOut = function (event) {
	event.preventDefault()
	console.log('now here')

	// const form = event.target
	// const data = getFormFields(form)
	// console.log(data)

	authApi.signOut()
}
// let move = 1
// const play = true

// $('cell').click(function () {
// 	if ($(this).text() === '' && play) {
// 		if (move % 2 === 1) {
// 			$(this).append('X')
// 			$(this).css('color', 'white')
// 		} else {
// 			$(this).append('O')
// 			$(this).css('color', 'black')
// 		}
// 		move++

// 		if (findWinner() !== -1 && findWinner() !== '') {
// 			if (findWinner() === 'X') {
// 				$('body').append('<div class="winner"><spanWinner</span>X</div>')
// 				$('body').append(
// 					'<button onclick="location.reload()">play Again</button>'
// 				)
// 				$('winner').css('background-color', 'white')
// 				$('button').css('color', 'white')
// 			} else {
// 				$('body').append('<div class="winner"><spanWinner</span>O</div>')
// 				$('body').append(
// 					'<button onclick="location.reload()">play Again</button>'
// 				)
// 				$('winner').css('background-color', 'black')
// 				$('button').css('color', 'black')
// 			}
// 			// const play = false
// 		}
// 	}
// })

// function findWinner() {
// 	sp1 = $('cell:nth-child(1) cell:nth-child(1)').text()
// 	sp2 = $('cell:nth-child(1) cell:nth-child(2)').text()
// 	sp3 = $('cell:nth-child(1) cell:nth-child(3)').text()
// 	sp4 = $('cell:nth-child(2) cell:nth-child(1)').text()
// 	sp5 = $('cell:nth-child(2) cell:nth-child(2)').text()
// 	sp6 = $('cell:nth-child(2) cell:nth-child(3)').text()
// 	sp7 = $('cell:nth-child(3) cell:nth-child(1)').text()
// 	sp8 = $('cell:nth-child(3) cell:nth-child(2)').text()
// 	sp9 = $('cell:nth-child(3) cell:nth-child(3)').text()
// 	// rows check

// 	if (sp1 == sp2 && sp2 == sp3) {
// 		return sp3
// 	} else if (sp4 == sp5 && sp5 == sp6) {
// 		return sp6
// 	} else if (sp7 == sp8 && sp8 == sp9) {
// 		return sp9
// 	}
// 	// columns
// 	else if (sp1 == sp4 && sp4 == sp7) {
// 		return sp7
// 	} else if (sp2 == sp5 && sp5 == sp8) {
// 		return sp8
// 	} else if (sp3 == sp6 && sp6 == sp9) {
// 		return sp9
// 	}
// 	// diagonals
// 	else if (sp1 == sp5 && sp5 == sp9) {
// 		return sp9
// 	} else if (sp3 == sp5 && sp5 == sp7) {
// 		return sp7
// 	}

// no winner
// return -1

module.exports = {
	onSignIn,
	onSignUp,
	onSignOut,
}
