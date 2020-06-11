'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const cells = ['', '', '', '', '', '', '', '', '']

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

const onSignUp = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.userCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onSignIn = function (event) {
  // prevent refresh
  event.preventDefault()
  console.log(event)
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.userSignIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePw = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function (event) {
  // prevent refresh
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGamesCreate = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let currentPlayer = 'X'

const onGamesUpdate = function (event) {
  // prevent refresh
  event.preventDefault()
  $(event.target).text(currentPlayer)
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  api.gamesUpdate()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  cells: cells,
  gamingWinnings: gameWinnings,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePw: onChangePw,
  onSignOut: onSignOut,
  onGamesCreate: onGamesCreate,
  onGamesUpdate: onGamesUpdate
}
