export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_STATE = 'UPDATE_STATE'

export const authFunction = (state, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
            }
        case LOGIN:
            const data = action.payload
            return {
                ...state,
                user: {...data},
                loading: false,
                isLogin: true
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                loading: false,
                isLogin: false,
            }
        case UPDATE_STATE:
            const {name, value} = action.payload
            return {
                ...state,
                [name]: value,
            }
    
        default:
            throw Error('unknown action')
    }
}