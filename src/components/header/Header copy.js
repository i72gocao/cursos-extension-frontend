import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

import LinkAdmin from "./LinkAdmin";
import LinkOtherUser from './LinkOtherUsers';


const Header = () => {
  
  const {auth} = useContext(AuthContext);

  return (
    <header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">Acerca de...</h4>
          <p className="text-muted">Cursos de extensión impartidos en la universidad de Córdoba</p>
          <p className="text-muted">Para inscribirse a un curso es necesario registrarse cntactando con el administrador</p>
          {/* <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> */}
        </div>
        {
          auth.username === "admin" ? 
          <LinkAdmin/>
          :
          auth.username !== "" ?
          <div className="col-sm-4 offset-md-1 py-4 text-light"><p>Hola usuario: {auth.username}</p></div>
          :
          <LinkOtherUser/>
        }
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> */}
        {/* <i className="far fa-graduation-cap" style={{fontSize:"50px",color:"white"}}></i> */}
        <i className="fas fa-graduation-cap" style={{fontSize:"20px",color:"white"}}></i> &nbsp;
        {/* <i className="fad fa-graduation-cap" style={{fontSize:"50px",color:"white"}}></i> */}
        <strong>ED-UCO</strong>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
  )
}

export default Header