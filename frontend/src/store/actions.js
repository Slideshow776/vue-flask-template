import api from '../api'

export const getMessageFromBackend = ({commit}) => {
  api.getResource('/')
    .then((data) => {
      commit('setMessageFromBackend', data)
    })
    .catch(error => {
      console.log(error)
      return error
    })
}

export const echoBackend = ({commit}, message) => {
  api.performRpcWithPromise('echo', {'echo': message})
    .then((data) => {
      commit('setMessageFromBackend', data)
    })
    .catch(error => {
      console.log(error)
      return error
    })
}

export const incrementCounter = ({commit}, value) => {
  commit('incrementCounter', value)
}

export const decrementCounter = ({commit}, value) => {
  commit('decrementCounter', value)
}
