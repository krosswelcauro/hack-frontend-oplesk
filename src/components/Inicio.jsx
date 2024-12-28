import React from 'react'
import { Link } from 'react-router-dom'

export function Inicio() {
  return (
    <div className='login'>
        <div className='form-container'>
          <div className="form">
            <h2>Bienvenidos al ultimo Hack - CRUD Usuarios</h2>
            <Link to={`/users`}><button className="primary-button login-button">Ver los usuarios</button></Link>
            <Link to={`/register-user`}><button className="secondary-button login-button">Registrar nuevo usuario</button></Link>
          </div>
        </div>
    </div>
  )
}
