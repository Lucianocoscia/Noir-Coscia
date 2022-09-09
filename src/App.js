import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'

// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      < NavBar/>

      <ItemListContainer> </ItemListContainer>

    </div>
  );
}

export default App;
