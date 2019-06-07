import actionTypes from '../actionTypes';
import { storeProducts } from '../data'

function productsReducer(state=storeProducts, action) {
    switch(action.type) {
        case actionTypes.getProducts: 
            return state
        default: console.log("No matching action dispatched")
    }
    return state
}
 
export default productsReducer