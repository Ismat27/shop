const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'
const DECREASE_ITEM = 'DECREASE_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'
const COUNT_TOTALS = 'COUNT_TOTALS'

const reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { product, quantity} = action.payload;
        const tempProduct = state.cartItems.find(item => item.id === product.id)
        if (tempProduct) {
            const tempItems = state.cartItems.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                }
                else {
                    return {
                        ...item
                    }
                }
            })
            return {
                ...state,
                cartItems: tempItems,
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
            }
        }
    }
    if (action.type === COUNT_TOTALS) {
        const total_quantity = state.cartItems.reduce((sum, item) => {
            sum += item.quantity
            return sum
        }, 0)
        const total_amount = state.cartItems.reduce((sum, item) => {
            const disPercent = item.discountPercentage
            if (disPercent) {
                const discount = disPercent * 0.01 * item.price
                const sale_price = item.price - discount
                sum += item.quantity * sale_price
                return sum
            }
            sum += item.quantity * item.price
            return sum
        }, 0)
        return {
            ...state,
            total_quantity,
            total_amount
        }
    }
    if (action.type === REMOVE_FROM_CART) {
        const tempItems = state.cartItems.filter(item => item.id !== action.payload)
        return {
            ...state,
            cartItems: tempItems
        }
    }
    if (action.type === DECREASE_ITEM) {
        const tempItems = state.cartItems.map(item => {
            if (item.id === action.payload) {
                let newQuantity = item.quantity - 1
                return {
                    ...item,
                    quantity: newQuantity > 0? newQuantity : 1
                }
            }
            else {
                return {...item}
            }
        })
        return {
            ...state,
            cartItems: tempItems
        }
    }
    if (action.type === INCREASE_ITEM) {
        const tempItems = state.cartItems.map(item => {
            if (item.id === action.payload) {
                // new quantity to be compared with number of items in stock
                let newQuantity = item.quantity + 1
                return {
                    ...item,
                    quantity: newQuantity
                }
            }
            else {
                return {...item}
            }
        })
        return {
            ...state,
            cartItems: tempItems
        }
    }
}

export {
    ADD_TO_CART, REMOVE_FROM_CART,
    CHECKOUT_CART, CLEAR_CART,
    INCREASE_ITEM, DECREASE_ITEM,
    COUNT_TOTALS
}
export default reducer