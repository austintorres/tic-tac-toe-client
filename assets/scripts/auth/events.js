'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const cells = ['', '', '', '', '', '', '', '', '']

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
  $('.tile').text('')
  store.currentPlayer = 'X'
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesUpdate = function (event) {
  // prevent refresh
  event.preventDefault()
  store.game.cells[$(event.target).data('cell-index')] = store.currentPlayer
  store.currentIndex = $(event.target).data('cell-index')
  console.log(store.currentIndex)
  $(event.target).text(store.currentPlayer)

  // if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
  //   return true
  // } else {
  //   (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x')
  //     return true
  // } if else {
  //   (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x')
  //     return true
  //
  //       if (store.game.cells[9])
  //         return false
  //
  //       if(store.game.cells === 'x') {
  //   }
  // }

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
