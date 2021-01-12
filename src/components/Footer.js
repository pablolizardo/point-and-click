import React from 'react'
import kite from './../images/coin.svg';
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <img src={kite} alt='kitelogo'/>
            <span>kite<strong>Points</strong></span>
            <small>created with ♥ by pablolizardo for @aerolab</small>
        </footer>
    )
}

export default Footer
