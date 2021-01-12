import React, { useState } from 'react'
import './Product.scss'
import bag from './../images/bag.svg'
import coin from './../images/coin.svg'
import { mutate } from 'swr'

function Product({ product, userPoints }) {
    const [ loading , setLoading ] = useState(false)
    const handleRedeem = async () => {
        setLoading(true)
        const url = `${process.env.REACT_APP_API}/redeem`
        const res = await fetch(url, {
            method: 'POST', headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AEROTOKEN}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId: product._id })
        })
        await res.json()
        await mutate(`${process.env.REACT_APP_API}/user/me`)
        await mutate(`${process.env.REACT_APP_API}/user/history`)
        setLoading(false)
    }
    return (
        <article className='product'>
            <span className={`product__bag ${userPoints >= product.cost && 'available'}`}>
                {userPoints < product.cost ? <>
                    <span className='product__remain'>You need {product.cost - userPoints} </span>
                    <img src={coin} alt='kite-coin' />
                </>
                    : <img src={bag} alt='bag' />
                }
            </span>
            <img className='product__image' src={product.img.url} alt='product' />
            <div>
                <label>{product.category}</label>
                <h4>{product.name}</h4>
            </div>
            <div className='product__overlay'>
                <span>{product.cost} <img src={coin} alt='kite-coin' /></span>
                {userPoints >= product.cost ?
                    <button onClick={handleRedeem}>{ !loading ? 'Redeem now' : 'Wait please...'}</button>
                    : <strong className=''>You need {product.cost - userPoints} </strong> }
            </div>
        </article>
    )
}

export default Product
