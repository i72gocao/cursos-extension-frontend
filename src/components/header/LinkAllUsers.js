import React from 'react'
import { Link } from 'react-router-dom'

import AuthService from '../../services/auth.service'

import "./style.css"

const LinkAllUsers = ({user}) => {

  return (
    <div className="col-sm-4 offset-md-1 py-4">
    <h4 className="text-white">Hola {AuthService.getUser().username}</h4>

    {/* 
      El admin puede ir a las rutas:
      -Gestionar los cursos ya sea crear, modificar, borrar o actualizar.
      -Revisar los mensajes obtenidos de los usuarios. 

      Los usuarios participantes pueden:
      -Ir a la lista de cursos donde estan matriculados

      Los usuarios visitantes solo pueden:
      -Ir a la ruta de contactar con el admin.

    */}
    <ul className="list-unstyled">
        {
            user.username === "admin" ? 
            (<>
                <li>
                    <Link to="/admin/pages/manage-courses" className="text-white text-decoration-none hover-link-user">
                        Gestionar cursos
                    </Link>
                </li>
                <li>
                    <Link to="/admin/pages/messages" className="text-white text-decoration-none hover-link-user">
                        Ver mensajes
                    </Link>
                </li>
            </>)
            :
            <>
                <li>
                    <Link to="/pages/course-subscripcion/mis-cursos" className="text-white text-decoration-none hover-link-user">
                        Mis cursos
                    </Link>
                </li>
            </>
        }
        {/* Aqui iria el logout */}
        <li>
            <Link to="/authentication/user/logout" className="text-white text-decoration-none hover-link-user">
                Cerrar sesión
            </Link>
        </li>
    </ul>
  </div>
  )
}

export default LinkAllUsers