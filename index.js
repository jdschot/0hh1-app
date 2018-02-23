const redux = require('redux')

function adder(state = 0, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    default:
      return state
  }
}

function appender(state = [], action = {}) {
  switch (action.type) {
    case 'APPEND':
      return [...state, action.data]
    default:
      return state
  }
}

const reducer = redux.combineReducers({adder, appender})
const store = redux.createStore(reducer)

store.dispatch({type: 'INCREMENT', value: 3})

console.log(store.getState())
