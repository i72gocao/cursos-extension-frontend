import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

//En este fichero se realiza la subscripcion por parte del participante
//No se debe de mostrar pagina alguna.
const Subscribe = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
      
      //fetch("localhost:3001/api/subscribe/id")

    }, []);

    return (
      <div>
          Subscribe
          <p>Id de subscripcion: {id}</p>
      </div>
    )
}

export default Subscribe