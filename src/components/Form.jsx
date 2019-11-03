import React from 'react'

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Dar en adopcion</h2>
    </div>
    <div className="Form-item">
      <form>
        <input type="text" name="name" placeholder="Nombre de tu mascota"/>
        <input type="text" name="description" placeholder="Describe tu mascota"/>
        <select name="type">
          <option disabled selected>Seleccionar</option>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>
        <select name="gender">
          <option disabled selected>Seleccionar</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>
        <select name="adopt">
          <option disabled selected>Seleccionar</option>
          <option value="true">Dar en Adopción</option>
          <option value="false">Cuidar</option>
        </select>
        <input type="file" name="photo"/>
        <button>Enviar</button>
      </form>
    </div>
  </div>
)

export default Form