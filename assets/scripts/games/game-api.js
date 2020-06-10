const config = require('./../config')
const store = require('./../store')

const gamesCreate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gamesIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const gamesShow = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games' + gameId
  })
}

const gamesUpdate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data,
          value: data
        },
        over: data
      }
    }
  })
}

const gamesDelete = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  gamesCreate: gamesCreate,
  gamesIndex: gamesIndex,
  gamesShow: gamesShow,
  gamesUpdate: gamesUpdate,
  gamesDelete: gamesDelete
}
