import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className="Nav">
    <ul>
      
      <li>
        <Link to="/">
          Inicio
        </Link>
      </li>

      <li>
        <Link to="/panel">
          Dar en Adopcion
        </Link>
      </li>

      <li>
        <Link to="/login">
          Mi Cuenta
        </Link>
      </li>

    </ul>
  </div>
)

export default Nav