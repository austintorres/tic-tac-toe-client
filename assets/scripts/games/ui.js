const store = require('./../store')

const newGameSuccess = (response) => {
  $('message').text('New game has begun!')
  // $('.row').show()
  store.game = response.game
  console.log(response)
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
}

const gameUpdateFailure = function () {
  console.log(gameUpdateFailure)
  $('form').trigger('reset')
  $('#message').text('Move not valid!')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  gameUpdateSuccess: gameUpdateSuccess,
  gameUpdateFailure: gameUpdateFailure
}
