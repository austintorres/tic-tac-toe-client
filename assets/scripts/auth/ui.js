const store = require('./../store.js')

const createSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up was successful!')
  $('#message').show().removeClass().addClass('success')
  $('#game-winner').hide()
  console.log('createSuccess')
}

const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed!')
  $('#message').show().removeClass().addClass('failure')
  console.log('createFailure')
}

const signInSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('You are now signed in as, ' + response.user.email)
  store.user = response.user
  $('#message').show().removeClass().addClass('success')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#stats').show()
  $('#new-game').show()
  $('#sign-in-message').hide()
  $('#game-title').show()
  $('#guest-msg').hide()
  $('#game-winner').hide()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed!')
  $('#message').show().removeClass().addClass('failure')
}

const changePwSuccess = function (response) {
  console.log(changePwSuccess)
  $('form').trigger('reset')
  $('#message').text('Password change successful!')
  $('#message').show().removeClass().addClass('success')
  $('#play-game').show()
  $('#game-winner').hide()
}

const changePwFailure = function () {
  console.log(changePwFailure)
  $('form').trigger('reset')
  $('#message').text('Password change was unsuccessful!')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('You signed out!')
  $('#message').show().removeClass().addClass('success')
  store.user.token = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-game').hide()
  $('#new-game').hide()
  $('#game-board').hide()
  $('#game-stats').hide()
  $('#game-title').hide()
  $('#sign-in-message').show()
  $('#game-start').hide()
  $('#stats').show()
  $('#guest-msg').show()
  $('#game-winner').hide()
}

const signOutFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Sign out failed!')
  $('#message').show().removeClass().addClass('failure')
}

const newGameSuccess = (response) => {
  $('form').trigger('reset')
  $('#game-board').show()
  $('#game-start').text('New game has begun!').show().removeClass().addClass('success')
  $('#game-winner').hide()
  $('#game-stats').hide()
  $('#guest-msg').hide()

  store.game = response.game
  store.cells = response.game.cells
  console.log(response, 'Game started!')
  store.gameOver = false
}

const newGameFailure = function () {
  $('#message').text('Failed to create new game!')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const gameUpdateSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Move was valid!')
  $('#message').show().removeClass().addClass('success')
  $('#game-start').hide()
  $('#guest-msg').hide()
  store.game = response.game
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const gameUpdateFailure = function (response) {
  $('#message').text('Move was invalid!')
  $('form').trigger('reset')
  $('#message').show().removeClass().addClass('failure')
}

const gameStatsSuccess = function (response) {
  console.log(response)
  $('#game-stats').text('Your total games played: ' + response.games.length).show()
}

const gameStatsFailure = function () {
  $('#game-stats').text('Cannot retrieve your game stats')
}

module.exports = {
  createSuccess,
  createFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure,
  gameStatsSuccess,
  gameStatsFailure
}
