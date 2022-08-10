import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <BrowserRouter>
      <div className="App">

        <header className='App-header sticky-top' >
          <Navbar />
        </header>
        <main className='d-flex flex-column align-items-center'>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos los productos' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria filtrada'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
          {/* <ItemCount stock={20} onAdd={handleOnAdd} /> */}
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
