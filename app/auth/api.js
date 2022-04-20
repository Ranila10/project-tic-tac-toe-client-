('use strict')

const store = require('../store.js')
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    data
  })
}
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token

    }
  })
}
const update = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token

    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }

  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  update,
  newGame
}
