// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import './components/navbar.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      < NavBar />

      <ItemListContainer greeting='Hola aqui iria el resto de mi pagina'> </ItemListContainer>

      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header> */}
    </div>
  );
}

export default App;
