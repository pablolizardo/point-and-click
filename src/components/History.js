import React from 'react'
import './History.scss'
import coin from './../images/coin.svg'

function History({ history }) {
  return (
    <ul id='history'>
      {history
        .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
        .slice(0, 10)
        .map((product, index) =>
          <React.Fragment key={index} >
            <li>
              <strong>{product.name}</strong>
              <span>{product.cost} <img src={coin} alt='coin' /></span>
            </li>
          </React.Fragment>
        )}
      <li style={{ textAlign: 'center', justifyContent: 'center', opacity: 0.6 }}>{history.length} More ...</li>
    </ul>
  )
}

export default History
