import React from 'react'
import { Link } from 'react-router-dom'

const Error401 = () => {
  return (
    <>
      <div>
        <h2>Error401 - error de inicio sesion</h2>
      </div>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">401</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span>Fallo al realizar el login.</p>
            <p class="lead">
                Ha sucedido un error. El nombre de usuario o la contraseña pueden estar incorrectos.
            </p>
            <Link to="/" className="btn btn-primary">Página de inicio</Link>
        </div>
      </div>
    </>

  )
}

export default Error401