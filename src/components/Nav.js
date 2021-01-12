import React, { useState } from 'react'
import kite from './../images/aerolab-logo.svg';
import './Nav.scss'
import coin from './../images/coin.svg'
import { mutate } from 'swr';
import History from './History';
function Nav({ user, history }) {
    const [showHistory, setShowHistory] = useState(false)
    const handleGiveMeMorePoints = async () => {
        const url = `${process.env.REACT_APP_API}/user/points`
        const res = await fetch(url, {
            method: 'POST', headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AEROTOKEN}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 5000 })

        })
        const json = await res.json()
        console.log(json)
        mutate(`${process.env.REACT_APP_API}/user/me`)
    }
    const handleShowHistory = () => setShowHistory(!showHistory)
    return (
        <nav>
            <div>
                <img src={kite} alt='Aerolab Logo' />
                <span>Kite<strong>Points</strong></span>
            </div>
            <div>
                <span>{user.name}</span>
                <button onClick={handleShowHistory} className='badge' id='user__points'>
                    {user.points} <img src={coin} alt='kite-coin' />
                    {showHistory && <History history={history} /> }
                </button>
                <button onClick={handleGiveMeMorePoints} style={{ backgroundColor: 'white' , padding: '3px', color: 'var(--primary-color)'}}>+</button>

            </div>
        </nav>
    )
}

export default Nav
