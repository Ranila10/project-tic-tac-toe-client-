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
// const previousMoves = []

// const cellElements = document.querySelectorAll('[data-cell]')
// const board = document.getElementById('board')
// const winnerDeclare = document.getElementById('winnerMsg')
// const winnerMessage = document.querySelector('[data-winning-message-text]')
// const xScore = document.getElementById('xScore')
// const oScore = document.getElementById('oScore')
// const drawScore = document.getElementById('draws')
// const scoreReset = document.getElementById('resetScore')
// const prevMatch = document.getElementById('previous')
// const reset = document.getElementById('restart')
// let circle

const scoreX = 0
const scoreO = 0
const scoreDraw = 0

gameStart()
reset.addEventListener('click', gameStart)
scoreReset.addEventListener('click', scoreClear)
// prevMatch.addEventListener('click', savedGame);

function gameStart () {
  circle = false
  cellElements.forEach(cell => {
    cell.classList.remove(X)
    cell.classList.remove(CIRCLE)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setHover()
  winnerDeclare.classList.remove('show')
}

function handleClick (e) {
  // placing the mark on the board
  const cell = e.target
  const currentClass = circle ? CIRCLE : X
  placemark(cell, currentClass)
  if (checkwin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setHover()
  }
}

function endGame (draw) {
  if (draw) {
    winnerMessage.innerText = 'DRAW!'
    // draw counter
    scoreDraw++
    drawScore.innerHTML = scoreDraw
  } else if (circle == true) {
    winnerMessage.innerText = 'O is the winner!'
    scoreO++
    oScore.innerHTML = scoreO
  } else {
    winnerMessage.innerText = 'X is the winner!'
    scoreX++
    xScore.innerHTML = scoreX
  }
  winnerDeclare.classList.add('show')
}

// declare draw
function isDraw () {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X) || cell.classList.contains(CIRCLE)
  })
}

function placemark (cell, currentClass) {
  cell.classList.add(currentClass)
  // previousMoves = cell.classList.add(currentClass);
}

// switching turns from X to O
function swapTurns () {
  circle = !circle
}

// for hover effect
function setHover () {
  board.classList.remove(X)
  board.classList.remove(CIRCLE)

  if (circle) {
    board.classList.add(CIRCLE)
  } else {
    board.classList.add(X)
  }
}

// winner check
function checkwin (currentClass) {
  return WIN_COMB.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

// reset scoreboard
function scoreClear () {
  scoreX = 0
  scoreO = 0
  scoreDraw = 0

  drawScore.innerText = ''
  oScore.innerText = ''
  xScore.innerText = ''
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onclick
}
