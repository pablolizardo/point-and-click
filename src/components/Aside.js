import React from 'react'
import './Aside.scss'

function Aside({ products }) {
    return (
        <aside>
            <span>{products.length} of {products.length} products </span>
            <span className='separator'></span>
            <span> Sort by: </span>
            <button className='active'>Most recent</button>
            <button>Lowest price</button>
            <button>Highest price</button>
            <button>▶</button>
        </aside>
    )
}

export default Aside
