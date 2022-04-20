const store = require('../store.js')
const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  store.user = response.user
  console.log(response)
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignUpSuccess = function () {
  console.log('signUp')
  console.log()
  $('#auth-display').html('<p> sign up successfully</p>')
  $('#sign-up-form').hide()
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p> signing up failure</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p> signed out successfully</p>')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p> signing out failure</p>')
}
const onNewGameFailure = function () {
  $('#auth-display').html('<p>Try Again</p>')
}
const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#auth-display').html('<p>Start Playing</p>').fadeOut(5000)
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameFailure,
  onNewGameSuccess
}
