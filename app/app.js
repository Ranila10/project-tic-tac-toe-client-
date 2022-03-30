const authEvents = require('./auth/events.js')
$(() => {
	$('#sign-in-form').on('submit', authEvents.onSignIn)

	$('#sign-up-form').on('submit', authEvents.onSignUp)

	// attach event listeners
	$('#sign-out-form').on('click', authEvents.onSignOut)
})

const currentPlayer = ['X', 'O']
function nameless() {
	currentPlayer.push(currentPlayer.shift())
	return currentPlayer[O]
}
