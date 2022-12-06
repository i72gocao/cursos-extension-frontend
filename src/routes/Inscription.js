import React, { useContext, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router'
import AuthContext from '../context/AuthContext';

//En este fichero se realiza la subscripcion por parte del participante
//No se debe de mostrar pagina alguna.
const Inscription = () => {
    //representa el id del curso al que se esta inscribiendo el usuario participante
    const {id} = useParams();

    const {auth} = useContext(AuthContext);
    //representa el id del usuario participante que se inscribe a un curso
    //const idUser = auth.id;

    
    const navigate = useNavigate();

    const inscription = useCallback(
      (datos) => {
        fetch(process.env.REACT_APP_API_ADD_USER_COURSE,{
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(datos)
        }).then(res => res.json())
        .then(data => {
          console.log("DATOS: ",data.status);
          if(data.status === "OK")
            navigate("/");
          else
            navigate("/")
        })
      },
      [navigate],
    )
    
    
    useEffect(() => {
      
      const datos = {
        courseId: id,
        userId: auth.id
      }
      inscription(datos);
      

    }, [auth,id,navigate,inscription]);

    return (
      <div>
          Subscribe
          <p>Id de subscripcion: {id}</p>
      </div>
    )
}

export default Inscription