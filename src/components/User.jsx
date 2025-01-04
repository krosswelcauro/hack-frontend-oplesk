import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserForm } from './UserForm';

export function User() {

    const {userId} = useParams()
    const [ user, setUser ] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (userId) {
            // Obtener usuario por su id si existe
            axios.get(`http://ec2-3-149-250-120.us-east-2.compute.amazonaws.com:5000/user/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error("Error al obtener el usuario", error))
        }
    }, [userId])

    const handleSubmit = (values) => {
        if (user) {
            // Actualizamos usuario
            axios.patch(`http://ec2-3-149-250-120.us-east-2.compute.amazonaws.com:5000/update-user/${userId}`, values)
                .then(() => {
                    alert("Usuario actualizado correctamente")
                    navigate('/users')
                })
                .catch(error => console.error("Error al actualizar el usuario", error))
        } else {
            // Creamos usuario
            axios.post(`http://ec2-3-149-250-120.us-east-2.compute.amazonaws.com:5000/create-user`, values)
                .then(() => {
                    alert("Usuario creado correctamente")
                    navigate('/users')
                })
                .catch(error => console.error("Error al crear el usuario", error))
        }
    }

  return (
    <div>
        {
            user ? (
                <div>
                    <h2>{user ? 'Editar Usuario' : 'Crear Usuario'}</h2>
                    <UserForm user={user} onSubmit={handleSubmit} />
                </div>
            ) : (
                <div>
                    <UserForm user={user} onSubmit={handleSubmit} />
                </div>
            )
        }
    </div>
  )
}
