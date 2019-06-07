import actionTypes from '../actionTypes';

let cart = {
    items: [],
    cartPrice: 0
}

function cartReducer(state=cart, action) {
    let cartItem
    switch(action.type) {
        case actionTypes.addToCart:
            cartItem = action.payload 
            if(!state.items.map(item => item.id).includes(cartItem.id)) {
                const item = {
                    id: cartItem.id,
                    title: cartItem.title,
                    price: cartItem.price,
                    count: 1,
                    company: cartItem.company,
                    totalPrice: cartItem.price
                }
                state = {
                    ...state,
                    items: [...state.items, item],
                    cartPrice: state.cartPrice + item.price
                }
                console.log(state)
            }
            
            break

        case actionTypes.incrementItem:
                cartItem = action.payload
                const [cartItems] = [state.items]
                const index = cartItems.map(ci => ci.id).indexOf(cartItem.id)
                const length = cartItems.length

                let cartItemToModify = {...cartItem}
                cartItemToModify.count += 1
                cartItemToModify.totalPrice = cartItemToModify.price * cartItemToModify.count


                let updatedCart = [...cartItems.slice(0,index), cartItemToModify, ...cartItems.slice(index+1, length)] 

                state = {
                    ...state,
                    cartPrice: state.cartPrice + cartItem.price,
                    items: [...updatedCart]
                }
                console.log(state)
            break

        case actionTypes.decrementItem:
                cartItem = action.payload
                const [cartItems1] = [state.items]
                const index1 = cartItems1.map(ci => ci.id).indexOf(cartItem.id)
                const length1 = cartItems1.length

                let cartItemToModify1 = {...cartItem}
                cartItemToModify1.count -= 1
                
                let updatedCart1
                if(cartItemToModify1.count <= 0) {
                    updatedCart1 = [...cartItems1.slice(0,index1), ...cartItems1.slice(index1+1, length1)]  
                } else {
                    cartItemToModify1.totalPrice = cartItemToModify1.price * cartItemToModify1.count
                    updatedCart1 = [...cartItems1.slice(0,index1), cartItemToModify1, ...cartItems1.slice(index1+1, length1)] 
                }

                state = {
                    ...state,
                    cartPrice: state.cartPrice - cartItem.price,
                    items: [...updatedCart1]
                }
                console.log(state)
            break

        case actionTypes.removeItem:
                cartItem = action.payload
                const [cartItems2] = [state.items]
                const index2 = cartItems2.map(ci => ci.id).indexOf(cartItem.id)
                const length2 = cartItems2.length

                let updatedCart2 = [...cartItems2.slice(0,index2), ...cartItems2.slice(index2+1, length2)] 

                state = {
                    ...state, 
                    cartPrice: 0,
                    items: [...updatedCart2]
                }
                console.log(state)
            break

        default: break
    }

    return state;
}

export default cartReducer