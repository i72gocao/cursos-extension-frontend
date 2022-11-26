import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import AuthContext from '../context/AuthContext'

const PersistentAdmin = () => {
  
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    if(auth.username !== "admin")
      navigate("/");
    
  }, [auth,navigate])
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default PersistentAdmin