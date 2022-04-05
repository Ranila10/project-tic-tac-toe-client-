const authEvents = require('./auth/events.js')
$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  $('#sign-up-form').on('submit', authEvents.onSignUp)

  // attach event listeners
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('.cell').on('click', authEvents.onclick)
})

// #board {
//   display: grid;
//   grid-template-columns: repeat(3, 2em);
//   grid-auto-rows: 2em;
//   text-align: center;
// }

// .scores {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// }

const currentPlayer = ['X', 'O']
function nameless () {
  currentPlayer.push(currentPlayer.shift())
  return currentPlayer[O]
}
