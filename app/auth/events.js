/* eslint-disable no-tabs */
const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')

const onSignIn = function (event) {
  event.preventDefault()
  console.log('now here')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
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

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}
let clicked = true

const onBoxClick = function () {
  if (click) {
    $(this).text('X').unbind()
    clicked = false
    store.game[0] = 'X'
    console.log(store.game)
  } else {
    $(this).text('O').unbind()
    clicked = true
    store.game[1] = 'O'
  }
  console.log(authApi.gameStatus())
}
const onRestartClick = function () {
  $('.box').text('')
  $('.box').bind('click', onBoxClick)
}

// const WIN_COMB = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// const scoreX = 0
// const scoreO = 0
// const scoreDraw = 0

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onBoxClick
}
