import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  
  return (
    <div className="App">
      < NavBar/>

      <ItemListContainer greeting='Aqui iria una img o carrusel'> </ItemListContainer>

    </div>
  );
}

export default App;
