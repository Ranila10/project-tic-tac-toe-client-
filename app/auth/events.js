/* eslint-disable no-tabs */
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
}
const X = 'x'
const CIRCLE = 'circle'
const WIN_COMB = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const previousMoves = []

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winnerDeclare = document.getElementById('winnerMsg')
const winnerMessage = document.querySelector('[data-winning-message-text]')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')
const drawScore = document.getElementById('draws')
const scoreReset = document.getElementById('resetScore')
const prevMatch = document.getElementById('previous')
const reset = document.getElementById('restart')
let circle

const scoreX = 0;
const scoreO = 0;
const scoreDraw = 0;

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onclick,
  onNewGame
}
