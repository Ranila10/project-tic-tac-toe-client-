const store = require('../store.js')
const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#auth-display').html('<p>User sign in successfully</p>')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#new-game').show()
  $('#board').show()
  $('#sign-out-form').show()
  $('#restart').show()
  $('.game-status').show()
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
  $('#new-game').hide()
  $('#sign-in-form').show()
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p> signing up failure</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p> signed out successfully</p>').fadeOut(6000)
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#board').hide()
  $('#restart').hide()
  $('#new-game').hide()
  $('.game-status').hide()
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p> signing out failure</p>')
}
const onNewGameFailure = function () {
  $('#auth-display').html('<p>Try Again</p>')
}
const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#auth-display').html('<p>Start Playing</p>')
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
