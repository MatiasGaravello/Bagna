import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { CartContextProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <CartContextProvider>
          <header className='App-header sticky-top' >
            <Navbar />
          </header>
          <main className='d-flex flex-column align-items-center'>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Todos los productos' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria filtrada' />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </main>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
