//rcfe
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa' 
import { Link } from 'react-router-dom' // importar Link de react-router-dom

import React from 'react'

function Header() {
  return (   //empezamos a crear el header
    <header className='header'>
        <div>
            <Link to='/'>Administrador de tareas</Link> 
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Registrar
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
