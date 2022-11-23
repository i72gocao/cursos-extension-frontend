import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

const PersistentAuth = () => {
    const {auth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth){
            navigate("/");
        }
    },[navigate,auth]);

  return (
    <>
        <Outlet/>
    </>
  )
}

export default PersistentAuth;