import { useContext } from 'react';
import { DataContext } from './contexts/DataContext'
import { UserContext } from './contexts/UserContext';
import Product from './components/Product';
import Nav from './components/Nav';
import Header from './components/Header';
import Aside from './components/Aside';

function App() {
  const { products } = useContext(DataContext)
  const { user } = useContext(UserContext)
  if (!products) return 'Loading...'
  return (
    <div id='App'>
      <Nav user={user}/>
      <Header />
      <main>
        <Aside products={products}/>
        <section className='products'>
          {products.map(product => <Product 
          product={product} 
          userPoints={user.points}
          key={product._id}

          /> )}
        </section>
      </main>
    </div>
  );
}

export default App;
