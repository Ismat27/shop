const FETCH_PRODUCTS_FAILED = 'FETCH_FAILED';
const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_LOADING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'

const reducer = (state, action) => {
    if (action.type === FETCH_PRODUCTS_START) {
        return {
            ...state,
            products_loading: true,
            products_loading_error: false,
        }
    }
    if (action.type === FETCH_PRODUCTS_SUCCESS) {
        const data = action.payload
        return {
            ...state,
            products_loading: false,
            products_loading_error: false,
            products: data,
            current_products: data,
        }
    }
    if (action.type === FETCH_PRODUCTS_FAILED) {
        return {
            ...state,
            products_loading: false,
            products_loading_error: true,
        }
    }
}

export {
    FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
}
export default reducer