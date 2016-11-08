class Store {

  constructor(reducer) {
    this.__reducer = reducer
    this.__state = reducer(undefined, { tag: '__INIT'})
    this.__onUpdate = () => {}
  }

  getState() {
    return this.__state
  }

  dispatch(action) {
    this.__state = this.__reducer(this.__state, action)
    this.__onUpdate()
    return this.__state
  }

  subscribe(callback) {
    this.__onUpdate = callback
  }

}

function createStore(reducer) {
  return new Store(reducer)
}

module.exports = { createStore }