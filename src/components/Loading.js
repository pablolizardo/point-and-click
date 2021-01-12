import React from 'react'
import kite from './../images/aerolab-logo.svg';
import './Loading.scss'
function Loading() {
    return (
        <div id='App' className='loading'>
            <nav>
                <div>
                    <img src={kite} alt='Aerolab Logo' />
                    <span>Kite<strong>Points</strong></span>
                </div>
                <div>
                    <span className='text-muted'>Loading...</span>
                </div>

            </nav>
            <header><div><h1>Electronics</h1></div></header>
            <main>
                <aside><span>loading...</span><button>loading...</button></aside>
                <section className='products'>
                    {Array.from({ length: 20 }).map(product => <div className='product'></div>)}
                </section>
            </main>
        </div>
    )
}

export default React.memo(Loading)
