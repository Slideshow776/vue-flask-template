export const incrementCounter = (state) => {
  state.count++
}

export const decrementCounter = (state) => {
  state.count--
}

export const setCounter = (state, newCount) => {
  state.count = newCount
}

export const setMessageFromBackend = (state, message) => {
  state.messageFromBackend = message
}
