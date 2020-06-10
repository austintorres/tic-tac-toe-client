const store = require('./../store')

const newGameSuccess = (response) => {
  $('message').text('New game has begun!')
  $('.row').show()
  store.game = response.game
}

const newGameFailure = function () {
  $('#message').text('Failed to create new game!')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure
}
