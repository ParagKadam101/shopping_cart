import { createStore, combineReducers } from 'redux'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'

const store = createStore(combineReducers({products: productsReducer, cart: cartReducer}))

export default store