const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'
const DECREASE_ITEM = 'DECREASE_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'

const reducer = (state, action) => {
    return {
        ...state
    }
}

export {
    ADD_TO_CART, REMOVE_FROM_CART,
    CHECKOUT_CART, CLEAR_CART,
    INCREASE_ITEM, DECREASE_ITEM
}
export default reducer