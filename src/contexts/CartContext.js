import React, { useReducer } from 'react'
import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CLEAR_CART,
    INCREASE_ITEM,
    DECREASE_ITEM
} from './CartReducer'
import reducer from './CartReducer'
const Context = React.createContext()

const initialState = {
    cartItems: [],
    total_quantity: 0,
    total_amount: 0,
    loading: false,
    loading_error: false
}

const CartContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (productId, product, quantity=1) => {
        dispatch({type: ADD_TO_CART, payload: {productId, product, quantity}})
    }

    return (
        <Context.Provider
            value={{
                ...state,
                addToCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

const useCartContext = () => {
    return React.useContext(Context)
}
export {useCartContext}
export default CartContext