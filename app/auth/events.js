/* eslint-disable no-tabs */
const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')
let gameOver = false

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
const onNewGame = function (event) {
  $('#auth-display').html('<p>player X make your move</p>')
  $('#board').show()
  $('#game').show()
  //   $('#new-game').hide()
  $('#play-again').show()
  $('#sign-out-button').show()
  event.preventDefault()
  console.log('now here')
  authApi.newGame()
    .then(() => authUi.onNewGameSuccess())
    .catch(() => authUi.onNewGameFailure())
}
const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
store.cells = ['', '', '', '', '', '', '', '', '']

const boxClicked = function () {
  if (gameOver === false) {
    if (currentPlayer === playerX) {
      $(this).text('X').unbind()
      const indx = $(this).attr('id')
      store.cells[indx] = 'X'
      console.log(store.cells)
    } else {
      $(this).text('O').unbind()
      const indx = $(this).attr('id')
      store.cells[indx] = 'O'
      console.log(store.cells)
    }
  } else {
    console.log('Restart the game!')
  }

  if ((currentPlayer === store.cells[0]) && (currentPlayer === store.cells[1]) && (currentPlayer === store.cells[2])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[3]) && (currentPlayer === store.cells[4]) && (currentPlayer === store.cells[5])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[6]) && (currentPlayer === store.cells[7]) && (currentPlayer === store.cells[8])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[0]) && (currentPlayer === store.cells[3]) && (currentPlayer === store.cells[6])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[1]) && (currentPlayer === store.cells[4]) && (currentPlayer === store.cells[7])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[2]) && (currentPlayer === store.cells[5]) && (currentPlayer === store.cells[8])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[0]) && (currentPlayer === store.cells[4]) && (currentPlayer === store.cells[8])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  } else if ((currentPlayer === store.cells[2]) && (currentPlayer === store.cells[4]) && (currentPlayer === store.cells[6])) {
    console.log(currentPlayer + ' win')
    gameOver = true
  }

  if (!store.cells.includes('') && gameOver === false) {
    console.log('game tie!')
  }

  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }

// console.log(authApi.gameStatus())
}
const restart = function () {
  $('.box').text('')
  $('.box').bind('click', boxClicked)
  store.cells = ['', '', '', '', '', '', '', '', '']
  gameOver = false
}

// const scoreX = 0
// const scoreO = 0
// const scoreDraw = 0

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  boxClicked,
  onNewGame,
  restart
}
