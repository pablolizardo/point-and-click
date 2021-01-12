import React from 'react'
import './Product.scss'
import bag from './../images/bag.svg'
import coin from './../images/coin.svg'
import { mutate } from 'swr'

function Product({ product, userPoints }) {
    const handleRedeem = async () => {
        const url = `${process.env.REACT_APP_API}/redeem`
        const res = await fetch(url, { method: 'POST', headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AEROTOKEN}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: { productId: product._id } })
        const json  = await res.json()
        console.log(json)
        mutate(`${process.env.REACT_APP_API}/user/me`)
    }
    return (
        <article className='product'>
            <span className={`product__bag ${userPoints > product.cost && 'available'}`}>
                {userPoints < product.cost ? <>
                    <span className='product__remain'>You need {product.cost - userPoints} </span>
                    <img src={coin} alt='kite-coin' />
                </>
                    : <img src={bag} alt='bag' />
                }
            </span>
            <img className='product__image' src={product.img.url} alt='product' />
            <p>
                <label>{product.category}</label>
                <h4>{product.name}</h4>
            </p>
            <div className='product__overlay'>
                <span>{product.cost} <img src={coin} alt='kite-coin' /></span>
                <button onClick={handleRedeem}>Redeem now</button>
            </div>
        </article>
    )
}

export default Product
