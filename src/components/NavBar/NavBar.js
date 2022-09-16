import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {AiOutlineSearch} from 'react-icons/ai'
import Oferta from './Oferta'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Oferta oferta='Envios gratis a partir de $15.000'/>
            <header>
                <nav className="navbar1">
                    <div className='navbar_buscador'>
                        <input className='buscador_input' placeholder='Buscar...'></input>
                        <a href='' className='buscador_img'><AiOutlineSearch/></a>
                    </div>

                    <div>
                    <NavLink className="navbar_h1"  to={'/'}>
                        Noir.
                    </NavLink>
                    </div>

                    <div className='navbar_items'>
                        <NavLink to={'/registro'} className='link'>Crear Cuenta</NavLink>
                        <NavLink to={'/login'} className='link'>Iniciar Sesión</NavLink>
                        <button className='button_Cart'><CartWidget/></button>
                    </div>

                </nav>
                <div className='contenedor_links' >
                        <ul className="navbar_ul">
                            <li>
                                <NavLink   to={'/'}  className='ul_enlace'  >
                                    Inicio

                                </NavLink></li>
 {/*                            <li>
                                <NavLink className={'ul_enlace'} to={'/products'}>
                                    Productos         
                                </NavLink>
                            </li> */}
                            <li className=" dropdown">
{/*                                 <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a> */}
                                <NavLink className={'ul_enlace dropdown-toggle'} role="button" data-bs-toggle="dropdown"  to={'/products'}>
                                    Productos         
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" data-bs-auto-close="outside"  to={'/products'} >Ver Todos</NavLink></li>
                                    <li><NavLink className="dropdown-item" data-bs-auto-close="true" to={'/category/Abrigos'} >Abrigos</NavLink></li>
                                    <li><NavLink className="dropdown-item" data-bs-auto-close="true" to={'/category/Pantalones'} >Pantalones</NavLink></li>
                                    <li><NavLink className="dropdown-item" data-bs-auto-close="true" to={'/category/Remeras'} >Remeras</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={'ul_enlace'} to={'/contact'}>
                                    Contacto
                                </NavLink>
                            </li>

                        </ul>
                    </div>
            </header>
        </>

    )}

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional
// react fragment <> </> por q los componentes deben retornar solo un elemento es como un div para encapsular todo y q me permita tener hermanos.