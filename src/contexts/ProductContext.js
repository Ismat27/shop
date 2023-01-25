import axios from 'axios'
import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { 
    FETCH_PRODUCTS_START, 
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCT_START, 
    FETCH_SINGLE_PRODUCT_FAILED,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FILTER_CATEGORY
} from './ProductReducer'
import reducer from './ProductReducer'
const Context = React.createContext()

const initialState = {
    products: [],
    current_products: [],
    recommended_products: [],
    flash_sales: [],
    new_arrivals: [],
    top_ranked: [],
    products_loading: false,
    products_loading_error: false,
    single_product: {},
    single_product_loading: false,
    single_product_loading_error: false,
    product_categories: [],
    current_category: 'all products'
}

const ProductContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchProducts = useCallback(() => {
        dispatch({type: FETCH_PRODUCTS_START})
        axios.get('http://localhost:8000/api/products/')
        .then(response => {
            const { data } = response
            dispatch({type:FETCH_PRODUCTS_SUCCESS, payload:data})
        })
        .catch(() => {
            console.log('error');
            dispatch({type: FETCH_PRODUCTS_FAILED})
        })
    }, [])

    const fetchSingleProduct = useCallback((productId) => {
        dispatch({type: FETCH_SINGLE_PRODUCT_START})
        axios.get(`http://localhost:8000/api/products/${productId}/`)
        .then(response => {
            const { data } = response
            dispatch({type:FETCH_SINGLE_PRODUCT_SUCCESS, payload:data})
        })
        .catch(() => {
            dispatch({type: FETCH_SINGLE_PRODUCT_FAILED})
        })
    }, [])

    const filterCategory = (category) => {
        dispatch({type: FILTER_CATEGORY, payload: category})
    }

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <Context.Provider value={{
            ...state,
            fetchSingleProduct,
            filterCategory
        }}>
            {children}
        </Context.Provider>
        )
    }

const useProductContext = () => {
    return useContext(Context)
}

export { useProductContext }
export default ProductContext