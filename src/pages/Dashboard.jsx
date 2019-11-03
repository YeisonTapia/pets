import React from 'react'
import Form from '../components/Form'

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashboard-container">
      <div className="Dashboard-content">
        <div className="Dashboard-form">
          <Form/>
        </div>
        <div className="Dashboard-profile">
          <h2>Perfil</h2>
          <div className="Dashboard-profile-info">
            <img src="" alt="Nombre de usuario"/>
            <span>Nombre: </span>
            <h4>Yeison Tapia</h4>
            <span>Correo: </span>
            <h4>yftapial@ut.edu.co</h4>
            <button>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard