'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

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

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePw: onChangePw,
  onSignOut: onSignOut
}
