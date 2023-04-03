import React, { useEffect, useReducer } from 'react'
import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CLEAR_CART,
    INCREASE_ITEM,
    DECREASE_ITEM,
    COUNT_TOTALS,
    CHECKOUT_CART
} from './CartReducer'
import reducer from './CartReducer'
const Context = React.createContext()

const getLocalItems = () => {
    const items = localStorage.getItem('cartItems')
    if (!items) {
        return []
    }
    return JSON.parse(items)
}

const initialState = {
    cartItems: getLocalItems(),
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

    const removeFromCart = (productId) => {
        dispatch({type: REMOVE_FROM_CART, payload: productId})
    }

    const decreaseItem = (itemId) => {
        dispatch({type: DECREASE_ITEM, payload: itemId})
    }

    const increaseItem = (itemId) => {
        dispatch({type: INCREASE_ITEM, payload: itemId})
    }

    const checkoutCart = () => {
        dispatch({type: CHECKOUT_CART})
    }

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        dispatch({type: COUNT_TOTALS})
    }, [state.cartItems])

    return (
        <Context.Provider
            value={{
                ...state,
                addToCart,
                removeFromCart,
                decreaseItem,
                increaseItem,
                checkoutCart
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