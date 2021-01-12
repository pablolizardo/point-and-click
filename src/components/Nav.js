import React from 'react'
import kite from './../images/aerolab-logo.svg';
import './Nav.scss'
import coin from './../images/coin.svg'
import { mutate } from 'swr';
function Nav({ user }) {
    const handleGiveMeMorePoints = async () => {
        const url = `${process.env.REACT_APP_API}/user/points`
        const res = await fetch(url, { method: 'POST', headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AEROTOKEN}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: { amount: 1000 } })
        const json  = await res.json()
        console.log(json)
        mutate(`${process.env.REACT_APP_API}/user/me`)
    }
    return (
        <nav>
            <div>
                <img src={kite} alt='Aerolab Logo' />
                <span>Kite<strong>Points</strong></span>
            </div>
            <div>
                <span>{user.name}</span>
                <span className='badge'>{user.points} <img src={coin} alt='kite-coin'/></span>
                <button onClick={handleGiveMeMorePoints} style={{ backgroundColor: 'white'}}>+</button>
            </div>
        </nav>
    )
}

export default Nav
