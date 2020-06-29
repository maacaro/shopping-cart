import { createStore as reduxCreateStore, combineReducers } from "redux"

const cart = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      itemCount: state.itemCount + 1,
    })
  }
  return { itemCount: 0 }
}

const createStore = () =>
  reduxCreateStore(
    combineReducers({ cart }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
export default createStore
