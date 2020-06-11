const store = require('./../store.js')

const createSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up was successful!')
  $('#message').show().removeClass().addClass('success')
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
  $('#game-stats').show()
  $('#game-board').show()
  $('#new-game').show()
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
}

const signOutFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Sign out failed!')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  createSuccess: createSuccess,
  createFailure: createFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePwSuccess: changePwSuccess,
  changePwFailure: changePwFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
