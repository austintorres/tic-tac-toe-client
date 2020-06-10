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

const signOut = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  userCreate: userCreate,
  userSignIn: userSignIn,
  changePassword: changePassword,
  signOut: signOut
}
