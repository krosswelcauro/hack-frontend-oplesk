import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( ()=> {
        
        const axiosUsers = async () => {
            try {
                setLoading(true)
                const users = await axios.get('http://ec2-3-149-250-120.us-east-2.compute.amazonaws.com:5000/users')
                // console.log(users.data.data);
                setUsers(users.data.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        axiosUsers();
    }, [])

    const handleDelete = async (user) => {
        if(window.confirm("Quieres eliminar este usuario?")) {
            try {
                axios.delete(`http://ec2-3-149-250-120.us-east-2.compute.amazonaws.com:5000/delete-user/${user.id}`)
                setUsers(users.filter(u => u.id !== user.id))
            } catch (error) {
                setError(error.message)
                alert("Error al eliminar el usuario")
            }
        }
    }
    

if(loading) return <div>Cargando...</div>
if(error) return <div>Error: {error}</div>

  return (
    <div className='table'>
      <h1>Lista de Usuarios</h1>
      <table id='customers'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo electronico</th>
                <th>Edad</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            {
                                user.name.length > 10 ? user.name.slice(0, 10) + '...' : user.name
                            }
                        </td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/update-user/${user.id}`}><button className='primary-button'>Editar</button></Link>
                        </td>
                        <td><button onClick={() => handleDelete(user)} className='secondary-button'>Eliminar</button></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      <h3>Total de usuarios: {users.length}</h3>
    </div>
  );
}
