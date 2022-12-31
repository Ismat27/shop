import React, { createContext, useContext, useReducer } from 'react'
import { 
    authFunction, LOGIN, LOGOUT
 } from './AuthReducer'

const Context = createContext()

const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isLogin: false,
    loading: true,
}

const AuthContext = ({children}) => {

    const [state, dispatch] = useReducer(authFunction, initialData);

    const login = () => {
        dispatch({type: LOGIN})
    }

    const logout = () => {
        dispatch({type: LOGOUT})
    }
    

  return (
    <Context.Provider value={
        {
            ...state,
            login, logout
        }
    }>
        { children }
    </Context.Provider>
  )
}

export const useAuthContext = () => {
    return useContext(Context)
}
export default AuthContext