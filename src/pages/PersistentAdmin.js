import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import AuthContext from '../context/AuthContext'

const PersistentAdmin = () => {
  
  const {auth} = useContext(AuthContext);
  console.log("username: ",auth.username)
  const navigate = useNavigate();

  useEffect(() => {

    if(auth.username !== "admin")
      navigate("/");
    
  }, [auth,navigate])
  
  return (
    <>
      {auth.username !== "admin" ? 
        <Outlet/>
        : 
        <h1>Bienvenido Admin</h1>
      }
        
    </>
  )
}

export default PersistentAdmin