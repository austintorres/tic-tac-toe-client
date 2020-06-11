'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
// const gameEvents = require('./games/events')
// const gameBoard = require('./games/game-board')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#change-password').hide()
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').hide()
  $('#new-game').on('submit', authEvents.onGamesCreate)
  $('#new-game').hide()
  $('#game-stats').hide()
  $('#game-board').hide()
  $('.tile').on('click', authEvents.onGamesUpdate)
})
