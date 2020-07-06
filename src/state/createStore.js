import { createStore as reduxCreateStore, combineReducers } from "redux"
import { cart, products } from "./reducer"
const windowExist = typeof window === "object"

const createStore = () =>
  reduxCreateStore(
    combineReducers({ cart, products }),
    windowExist &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
export default createStore
