import actionTypes from '../actionTypes';
import { storeProducts } from '../data'

function productsReducer(state=storeProducts, action) {
    switch(action.type) {
        case actionTypes.getProducts: 
             return state
             
        case actionTypes.updateProducts:
          
             state = [
                ...action.payload
             ]
             break
             
        default: break

    }
    return state
}
 
export default productsReducer