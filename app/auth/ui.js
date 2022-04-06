const store = require('../store.js')
const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')
  store.user = response.user
  console.log(response)
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignUpSuccess = function () {
  console.log('signUp')
  console.log()
  $('#auth-display').html('<p>Error while signing up</p>')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess,
  onSignOutFailure
}
