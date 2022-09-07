import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../images/Noir..png'
import {AiOutlineSearch} from 'react-icons/ai'
import Oferta from './Oferta'

const NavBar = () => {
    return (
        <>
            <Oferta oferta='Envios gratis a partir de $15.000'/>
            <header>
                <nav className="navbar1">
                    <div className='navbar_buscador'>
                        <input className='buscador_input' placeholder='Buscar...'></input>
                        <a className='buscador_img'><AiOutlineSearch/></a>
                    </div>

                    <div>
                    <h1 className="navbar_h1" src={logo}  alt="logo">Noir.</h1>
                    </div>

                    <div className='navbar_items'>
                        <a className='link'>Crear Cuenta</a>
                        <a className='link'>Iniciar Sesión</a>
                        <button className='button_Cart'><CartWidget/></button>
                    </div>

                </nav>
                <div className='contenedor_links' >
                        <ul className="navbar_ul">
                            <li><a className='ul_enlace' href="#">Inicio</a></li>
                            <li><a className='ul_enlace' href="#">Productos</a></li>
                            <li><a className='ul_enlace' href="#">Contacto</a></li>
                        </ul>
                    </div>
            </header>
        </>

    )}

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional
// react fragment <> </> por q los componentes deben retornar solo un elemento es como un div para encapsular todo y q me permita tener hermanos.