import logo from   '../images/logo12.png'

const NavBar = () => {
    return (
        <header className='contenedor_navbar'>
            <nav className="navbar">
                
                <img className="navbar_img" src={logo}  alt="logo"></img>
                <ul className="navbar_ul">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Quienes Somos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#" ></a></li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional

