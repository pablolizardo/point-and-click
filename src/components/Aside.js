import React from 'react'
import { ITEMS_PER_PAGE } from '../App'
import './Aside.scss'

function Aside({ products, filter, setFilter, page, setPage }) {
    const handlePrevPage = () => setPage(p => p -1)
    const handleNextPage = () => setPage(p => p +1)
    return (
        <aside>
            <span>Showing <strong>{ITEMS_PER_PAGE * (page +1)}</strong> of <strong>{products.length}</strong> products </span>
            <span className='separator'></span>
            <span> Sort by: </span>
            <button onClick={() => setFilter('name')} className={filter === 'name' ? 'active': ''}>Name</button>
            <button onClick={() => setFilter('cost')} className={filter === 'cost' ? 'active': ''}>Price</button>
            <span className='aside__buttons'>
                <button onClick={handlePrevPage} disabled={page  < 1}>←</button>
                <button onClick={handleNextPage} disabled={products.length/ITEMS_PER_PAGE <= page+1}>→</button>
            </span>
        </aside>
    )
}

export default Aside
