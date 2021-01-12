import React from 'react'
import './Aside.scss'

function Aside({ products, filter, setFilter }) {
    return (
        <aside>
            <span>Showing <strong>{products.length}</strong> of <strong>{products.length}</strong> products </span>
            <span className='separator'></span>
            <span> Sort by: </span>
            <button onClick={() => setFilter('name')} className={filter === 'name' && 'active'}>Name</button>
            <button onClick={() => setFilter('cost')} className={filter === 'cost' && 'active'}>Price</button>
            <button>→</button>
        </aside>
    )
}

export default Aside
