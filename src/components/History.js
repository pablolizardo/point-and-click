import React from 'react'
import './History.scss'
import coin from './../images/coin.svg'

function History({history}) {
    return (
        <ul id='history'>
          {history.map((product, index) => 
            <React.Fragment key={index} >
              <li>
                <strong>{product.name}</strong>
                <span>{product.cost} <img src={coin} alt='coin'/></span>
              </li>
            </React.Fragment>
          )}
      </ul>
    )
}

export default History
