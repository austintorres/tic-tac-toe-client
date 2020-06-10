'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')
const getFormFields = require('../../lib/get-form-fields.js')

const onGamesCreate = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onGamesCreate: onGamesCreate
}
