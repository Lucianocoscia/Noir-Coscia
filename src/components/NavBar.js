import logo from   '../images/logo12.png'
import CartWidget from './CartWidget/CartWidget.js';
import search from '../components/NavBar/search-icon.svg'

const NavBar = () => {
    return (
        <header className='contenedor_navbar'>
            <nav className="navbar">
                <div className='navbar_buscador'>
                    <input className='buscador_input' placeholder='Buscar...'></input>
                    <img className='buscador_img' src={search}></img>
                </div>
                <img className="navbar_img" src={logo}  alt="logo"></img>
                <div className='contenedor_links' >
                    <ul className="navbar_ul">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Quienes Somos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className='navbar_items'>
                    <a className='link_registro'>Crear Cuenta</a>
                    <a className='link_sesion'>Iniciar Sesión</a>
                    <button className='button_Cart'><CartWidget/></button>
                </div>

            </nav>
        </header>
    )}

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional

