const authEvents = require('./auth/events.js')
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  $('#sign-in-form').on('submit', authEvents.onSignIn)

  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // game listeners
  $('.box').on('click', authEvents.boxClicked)
  // reset
  $('#restart').on('click', authEvents.restart)
})
