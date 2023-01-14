const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'
const DECREASE_ITEM = 'DECREASE_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'

const reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const {productId, product, quantity} = action.payload;
        const tempProduct = state.cartItems.find(item => item.id === productId)
        if (tempProduct) {
            return {
                ...state
            }
        }
        else {
            const newItem = {
                ...product,
                quantity,
            }
            return {
                ...state,
                cartItems: [newItem, ...state.cartItems],
                total_quantity: state.total_quantity + quantity,
                total_amount: state.total_amount + Number(product.price) * quantity,
            }
        }
    }
}

export {
    ADD_TO_CART, REMOVE_FROM_CART,
    CHECKOUT_CART, CLEAR_CART,
    INCREASE_ITEM, DECREASE_ITEM
}
export default reducer