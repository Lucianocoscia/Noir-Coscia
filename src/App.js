import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  
  return (
    <div className="App">
      < NavBar/>

      <ItemListContainer greeting='Hola aqui iria el resto de mi pagina'> </ItemListContainer>

    </div>
  );
}

export default App;
