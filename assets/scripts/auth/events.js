'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')
// const cells = ['', '', '', '', '', '', '', '', '']

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
  $('#game-winner').hide()
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
  if (store.cells[$(event.target).data('cell-index')] === '' && store.gameOver === false) {
    store.cells[$(event.target).data('cell-index')] = store.currentPlayer
    store.currentIndex = $(event.target).data('cell-index')
    console.log(store.currentIndex)
    $(event.target).text(store.currentPlayer)
    console.log(store.cells)
    if (store.cells[0] === store.currentPlayer && store.cells[1] === store.currentPlayer && store.cells[2] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[3] === store.currentPlayer && store.cells[4] === store.currentPlayer && store.cells[5] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[6] === store.currentPlayer && store.cells[7] === store.currentPlayer && store.cells[8] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[0] === store.currentPlayer && store.cells[3] === store.currentPlayer && store.cells[6] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[6] === store.currentPlayer && store.cells[7] === store.currentPlayer && store.cells[8] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[1] === store.currentPlayer && store.cells[4] === store.currentPlayer && store.cells[7] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[2] === store.currentPlayer && store.cells[5] === store.currentPlayer && store.cells[8] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[0] === store.currentPlayer && store.cells[4] === store.currentPlayer && store.cells[8] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells[2] === store.currentPlayer && store.cells[4] === store.currentPlayer && store.cells[6] === store.currentPlayer) {
      store.gameOver = true
      $('#game-winner').text(`${store.currentPlayer} Wins!`).show()
    } else if (store.cells.every(currentValue => currentValue !== '')) {
      $('#game-winner').text('Tie Game!!').show()
      store.gameOver = true
      console.log('Its a tie!')
    }
    console.log(store.gameOver)

    api.gamesUpdate()
      .then(ui.gameUpdateSuccess)
      .catch(ui.gameUpdateFailure)
  } else {
    $('#message').text('Move was invalid!')
    $('#message').show().removeClass().addClass('failure')
  }
}

const onGetGameStats = function (event) {
  event.preventDefault()
  api.gamesStats()
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}

module.exports = {
  gamingWinnings: gameWinnings,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePw: onChangePw,
  onSignOut: onSignOut,
  onGamesCreate: onGamesCreate,
  onGamesUpdate: onGamesUpdate,
  onGetGameStats: onGetGameStats
}
