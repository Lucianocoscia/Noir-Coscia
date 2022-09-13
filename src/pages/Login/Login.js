import React from 'react'
import './Login.css'
import logo from '../../images/Noir..png'
const Login = () => {
  return (
    <>
    <div className='flex-login'>

        <div className='contenedor-login '>
            <h2 className='titulo-login'>Iniciar Sesión</h2>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                <button className='boton-login'>Iniciar Sesión</button>
            </div>
        </div>
    </div>

    </>

  )
}

export default Login




