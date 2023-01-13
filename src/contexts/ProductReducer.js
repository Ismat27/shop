const FETCH_PRODUCTS_FAILED = 'FETCH_FAILED';
const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_LOADING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_SINGLE_PRODUCT_START = 'FETCH_SINGLE_PRODUCT_LOADING';
const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS'
const FETCH_SINGLE_PRODUCT_FAILED = 'FETCH_SINGLE_PRODUCT_FAILED';

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
    // Single product fetching
    if (action.type === FETCH_SINGLE_PRODUCT_START) {
        return {
            ...state,
            single_product_loading: false,
            single_product_loading_error: false,
        }
    }
    if (action.type === FETCH_SINGLE_PRODUCT_SUCCESS) {
        const data = action.payload
        return {
            ...state,
            single_product: data,
            single_product_loading: false,
            single_product_loading_error: false,
        }
    }
    if (action.type === FETCH_SINGLE_PRODUCT_FAILED) {
        return {
            ...state,
            single_product_loading: false,
            single_product_loading_error: true,
        }
    }
    throw new Error('Unknown action')
}

export {
    FETCH_PRODUCTS_FAILED, 
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCT_START,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAILED
}
export default reducer