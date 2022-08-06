import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className='App-header sticky-top' >
        <Navbar></Navbar>

      </header>
      <main>
        <ItemListContainer greeting='Hola comision 34695' />
      </main>

    </div>
  );
}

export default App;
