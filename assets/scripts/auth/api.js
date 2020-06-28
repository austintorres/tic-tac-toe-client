const config = require('./../config')
const store = require('./../store.js')

// User sign up
const userCreate = function (formData) {
  console.log(formData)
  // return sign up
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    // data
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

// User sign in
const userSignIn = function (data) {
  // console.log test
  console.log(data)
  // return
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // data
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

// user sign out
const signOut = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// change password
const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.passwords.old,
        new: formData.passwords.new
      }
    }
  })
}

// creating a new game
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

// games index
const gamesIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

// show game
const gamesShow = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games' + gameId
  })
}

// all game updates
const gamesUpdate = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.currentIndex,
          value: store.currentPlayer
        },
        over: store.gameOver
      }
    }
  })
}

// destroy game
const gamesDelete = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gamesStats = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + /games/,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  userCreate: userCreate,
  userSignIn: userSignIn,
  changePassword: changePassword,
  signOut: signOut,
  gamesCreate: gamesCreate,
  gamesIndex: gamesIndex,
  gamesShow: gamesShow,
  gamesUpdate: gamesUpdate,
  gamesDelete: gamesDelete,
  gamesStats: gamesStats
}
