import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
const BASE_URL = process.env.REACT_APP_BASE_URL

const NewProduct = () => {

    const [productName, setProductName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImg, setProductImg] = useState('')

    const setImg = (event) => {
        const file = event.target.files[0]
        setProductImg(file)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!productImg || !productName || !productDesc || !productPrice) {
            alert('all fields are required')
            return
        }
        
        const data = new FormData()
        data.append('name', productName)
        data.append('desc', productDesc)
        data.append('price', productPrice)
        data.append('image',  productImg, productImg.name)

        axios.post(`${BASE_URL}/api/products/`,  data, {
            headers: {'Content-Type': 'multi-part/form-data'}
        })
        .then(res => {
            console.log(res.data);
            setProductDesc('')
            setProductImg('')
            setProductName('')
            setProductPrice('')
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <Wrapper className='bg-white'>
        <div className='content'>
            <form onSubmit={handleSubmit} className='new-product-form'>
                <h1>New Product</h1>
                <div className='form-field'>
                    <label htmlFor='name'>title</label>
                    <input
                        name='name'
                        id='name'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='desc'>description</label>
                    <textarea
                        name='desc'
                        id='desc'
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='price'>price</label>
                    <input
                        name='price'
                        id='price'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='image'>upload image</label>
                    <input
                        name='image'
                        id='image'
                        type={'file'}
                        accept='image/*'
                        onChange={setImg}
                    />
                </div>
                <button className='btn submit-btn'>submit</button>
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
max-width: 928px;
margin: auto;
.content {
    background: #FAFBFE;
    padding: 20px 24px;
}
`

export default NewProduct