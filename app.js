const reducks = require('./reducks')
const actionCreators = require('./action-creators')
const countReducer = require('./countReducer')

const store = reducks.createStore(countReducer)
console.log("initialState:", store.getState())

store.subscribe(() => {
  console.log('Current state:', store.getState())
})

store.dispatch(actionCreators.increment())
store.dispatch(actionCreators.increment())
store.dispatch(actionCreators.increment())
store.dispatch(actionCreators.decrement())
store.dispatch(actionCreators.decrement())
store.dispatch(actionCreators.decrement())



