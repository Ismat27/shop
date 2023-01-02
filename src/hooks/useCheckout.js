import { useState } from 'react'

const address = {
    first_name: '',
    last_name: '',
    email: '',
    street: '',
    state: '',
    country: ''
}

const useCheckout = () => {

    const [billingAddress, setBillingAddress] = useState(address)
    const [shippingAddress, setShippingAddress] = useState(address)
    const [sameAddress, setSameAddress] = useState(false)

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
        console.log(billingAddress, shippingAddress);
    }

    return (
        {
            sameAddress, setSameAddress,
            billingAddress, editBillingAdrress,
            shippingAddress, editShippingAdrress,
            checkoutSubmit
        }
    )
}

export default useCheckout