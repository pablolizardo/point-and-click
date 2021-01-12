import React, { useState } from 'react'
import { useContext } from 'react';
import { DataContext } from './contexts/DataContext'
import { UserContext } from './contexts/UserContext';
import Product from './components/Product';
import Nav from './components/Nav';
import Header from './components/Header';
import Aside from './components/Aside';
import Loading from './components/Loading'
import Footer from './components/Footer';
import kite from './images/big_kite.svg'
export const ITEMS_PER_PAGE=8

function App() {
  const { products } = useContext(DataContext)
  const { user, history } = useContext(UserContext)

  const [filter, setFilter] = useState('name')
  const [page, setPage] = useState(0)

  if (!products || !user || !history) return <Loading />
  return (
    <div id='App'>
      <img src={kite} alt='kite' id='big-kite' />
      <Nav user={user} history={history} />
      <Header />
      <main>
        <Aside products={products} filter={filter} setFilter={setFilter} page={page} setPage={setPage} />
        <section className='products'>
          {products
            .slice((page + 1) * ITEMS_PER_PAGE, ((page + 1) * ITEMS_PER_PAGE) * 2)
            .sort((prev, act) => prev[filter] < act[filter] && -1)
            .map(product => <Product
              product={product}
              userPoints={user.points}
              key={product._id}
            />)}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
