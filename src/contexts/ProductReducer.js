const FETCH_PRODUCTS_FAILED = 'FETCH_FAILED';
const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_LOADING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_SINGLE_PRODUCT_START = 'FETCH_SINGLE_PRODUCT_LOADING';
const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS'
const FETCH_SINGLE_PRODUCT_FAILED = 'FETCH_SINGLE_PRODUCT_FAILED';
const FILTER_CATEGORY = 'FILTER_CATEGORY'

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
        const flash_sales = data.filter(item => item.is_flash_sale).slice(0, 5)
        const recommended_products = data.filter(item => item.is_recommended).slice(0, 6)
        const new_arrivals = data.sort((a,b) => {
            return b.timestamp - a.timestamp
        }).slice(0, 6)
        const top_ranked = data.sort((a,b) => {
            return b.discount - a.discount
        }).slice(0, 5)
        const categories = data.reduce((aggregate, item)=>{
            if (!aggregate.includes(item.category)) {
                aggregate.push(item.category)
            }
            return aggregate
        }, [])
        return {
            ...state,
            flash_sales,
            recommended_products,
            new_arrivals,
            top_ranked,
            products_loading: false,
            products_loading_error: false,
            products: data,
            current_products: data,
            product_categories: categories
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
            single_product_loading: true,
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
    if (action.type === FILTER_CATEGORY) {
        const newCategory = action.payload
        if (newCategory === 'all') {
            return {
                ...state,
                current_products: state.products,
                current_category: 'all products'
            }
        }
        else {
            const tempProducts = state.products.filter(item => {
                return item.category === newCategory
            })
            return {
                ...state,
                current_products: tempProducts,
                current_category: newCategory
            }
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
    FETCH_SINGLE_PRODUCT_FAILED,
    FILTER_CATEGORY
}
export default reducer