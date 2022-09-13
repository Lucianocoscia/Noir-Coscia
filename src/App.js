import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './pages/ItemDetalContainer/ItemDetailContainer';
import Categories from '../src/pages/Inicio/Categories/Categories';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login/Login';

function App() {
  
  return (
    <>
      <BrowserRouter>
      < NavBar/>
        <Routes>
        <Route path='/' element={<>

          <Categories/>
          </>}  />
          <Route path='products' element={<>

          <ItemListContainer/>
          </>}  />
          <Route path='detail/:id' element={<ItemDetailContainer/>} />
          <Route path='contact' element={<div style={{height:'65vh'}}>Contacto</div>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registro' element={<>Aca iria la seccion de registrarse</>}/>



        </Routes>
      <Footer/>
      </BrowserRouter>
    
    </>

  );
}

export default App;
{/* <div className="App">


<ItemDetailContainer/>
</div> */}