import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App">

      <header className='App-header sticky-top' >
        <Navbar />
      </header>
      <main className='d-flex flex-column align-items-center'>
        {/* <ItemListContainer greeting='Hola comision 34695' /> */}
        <ItemDetailContainer />
        {/* <ItemCount stock={20} onAdd={handleOnAdd} /> */}
      </main>

    </div>
  );
}

export default App;
