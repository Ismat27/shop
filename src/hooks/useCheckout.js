import { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'

const address = {
    first_name: '',
    last_name: '',
    email: '',
    street: '',
    state: '',
    country: ''
}

const useCheckout = () => {

    const { checkoutCart } = useCartContext()

    const [billingAddress, setBillingAddress] = useState(address)
    const [shippingAddress, setShippingAddress] = useState(address)
    const [sameAddress, setSameAddress] = useState(false)

    const [orderComplete, setOrderComplete] = useState(false)

    const completeOrder = () => {
        setOrderComplete(false)
    }

    const editShippingAdrress = (event) => {
        const {name, value} = event.target
        setShippingAddress(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const editBillingAdrress = (event) => {
        const {name, value} = event.target
        setBillingAddress(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const checkoutSubmit = (event) => {
        event.preventDefault()
        checkoutCart()
        setOrderComplete(true)
    }

    return (
        {
            sameAddress, setSameAddress,
            billingAddress, editBillingAdrress,
            shippingAddress, editShippingAdrress,
            checkoutSubmit,
            orderComplete, completeOrder
        }
    )
}

export default useCheckout