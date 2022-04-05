
// const cells = document.querySelectorAll('.cell')
// const PLAYER_X = 'X'
// const PLAYER_O = 'O'
// const turn = PLAYER_X

// const boardState = Array(cells.length)
// boardState.fill(null)

// const strike = document.getElementById('strike')
// gameOverArea = document.getElementById('game-over-area')
// gameOverText = document.getElementById('game-over-text')
// const playAgain = document.getElementById('play-again')
const previousMoves = []

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winnerDeclare = document.getElementById('winnerMsg')
const winnerMessage = document.querySelector('[data-winning-message-text]')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')
const drawScore = document.getElementById('draws')
const scoreReset = document.getElementById('resetScore')
const reset = document.getElementById('restart')
let circle

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./index.scss')
