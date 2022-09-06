import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../images/logo13.png'
import {AiOutlineSearch} from 'react-icons/ai'


const NavBar = () => {
    return (
        <header className='contenedor_navbar'>
            <nav className="navbar1">
                <div className='flex_nav'>
                <div className='navbar_buscador'>
                    <input className='buscador_input' placeholder='Buscar...'></input>
                    <a className='buscador_img'><AiOutlineSearch/></a>
                </div>

                <img className="navbar_img" src={logo}  alt="logo"></img>

                <div className='navbar_items'>
                    <a className='link_registro'>Crear Cuenta</a>
                    <a className='link_sesion'>Iniciar Sesión</a>
                    <button className='button_Cart'><CartWidget/></button>
                </div>
                </div>

                <div className='contenedor_links' >
                    <ul className="navbar_ul">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a data-jam='menu' href="#">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )}

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional
// react fragment <> </> por q los componentes deben retornar solo un elemento es como un div para encapsular todo y q me permita tener hermanos.