'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

// game board empty cells
const gameBoard = ['', '', '', '', '', '', '', '', '']

// winning combos
const gameWinnings = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// const tiles = document.querySelectorAll('.tile')
//
// const firstMove = 'X'
// const secondMove = '0'

const onGamesCreate = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesUpdate = function (event) {
  console.log($(event.target).text('x'))
  // prevent refresh
  event.preventDefault()
  api.gamesUpdate()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  onGamesCreate: onGamesCreate,
  onGamesUpdate: onGamesUpdate,
  gameBoard: gameBoard,
  gameWinnings: gameWinnings
}
