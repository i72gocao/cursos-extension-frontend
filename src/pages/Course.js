import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

import imageDefault from "../assets/curso-extension.jpg";
import AuthContext from '../context/AuthContext';

const dataDefault = {
  titulo : "",
  precio: "",
  descripcion: "",
  fecha_inicio: "2023-12-31T00:00:00.000Z",
  fecha_fin: "2023-12-31T00:00:00.000Z",
  fecha_limite_subscripcion: "2023-12-31T00:00:00.000Z",
  imagen_portada: imageDefault,
  min_participantes: "0",
  max_participantes: "0"
}

const Course = () => {

    let {id} = useParams();
    
    const convertDate = (fecha) => {
      const date = new Date(fecha).toISOString("es-ES").slice(0,10);
      return date.split("-").reverse().join("-");
    }

    const [res,setRes] = useState(dataDefault);
    const [num,setNum] = useState(0);

    const {auth} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleInscripcion = () => {
      try {
        fetch(process.env.REACT_APP_API_ADD_USER_COURSE,{
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            courseId:id,
            userId: auth.id
          })
        })
        .then(res => res.json())
        .then(data => {
          
          if(data.status === "OK"){
            navigate("/")
          }else{
            navigate("")
          }
        })
  
        setTimeout(() => {
          const $alert = document.querySelector("#multiCollapseExample1");
          $alert.classList.add("collapsing");
          $alert.classList.remove("collapsing");
          $alert.classList.remove("show");
          
        },5000)
  
      } catch (error) {
        console.log("Ha sucedido un error al guardar los datos.")
      }
    }

    useEffect(() => {
      try {
        fetch(process.env.REACT_APP_API_GET_COURSE,{
          method:"GET",
          headers: {
            "Content-Type":"application/json",
            "id":id
          }
        })
        .then(res => res.json())
        .then(data => {
          setRes(data.data);
        })
      } catch (error) {
        console.error("Ocurrió un error en el envio de datos")
      }

      try {
        fetch(process.env.REACT_APP_API_COUNT_USERS_COURSE,{
          method: "GET",
          headers: {
            id: id
          }
        })
        .then(res => res.json())
        .then(data => {
          setNum(data.data);
        });
      } catch (error) {
        console.log("Ha ocurrido un error: ", error);
      }

    }, [id])
    

  return (
    <Layout>
        <Header/>
        <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div>        
              <div>
              </div>
            </div>
            <div>
              <div>
                {
                  res.imagen_portada ?
                  <img src={`http://localhost:3001/uploads/public/images/${res.imagen_portada}`} alt={res.titulo} className="img-fluid"/>
                  :
                  <img src={imageDefault} alt={res.titulo} className="img-fluid"/>
                }
              </div>
              
              <div className='bg-dark text-white p-3 mt-2 mb-2'>
                <h3>{res.titulo}</h3>
              </div>
              
              <div>
                <p>{res.descripcion}</p>
              </div>
              
              <div>
                <p> <span className='fw-bold'>Fecha de inicio: </span>{convertDate(res.fecha_inicio)}</p>
              </div>
              
              <div>
                <p> <span className='fw-bold'>Fecha de finalización: </span>{convertDate(res.fecha_fin)}</p>
              </div>

              <div>
                <p> <span className='fw-bold'>Fecha límite de inscripción: </span>{convertDate(res.fecha_limite_subscripcion)}</p>
              </div>

              <div>
                <div className='d-flex align-items-baseline'>
                  <p className='fw-bold'>Precio: &nbsp; </p>
                  <h4>{res.precio}0€</h4>
                </div>
              </div>

              <div>
                <p><span className='fw-bold'>Participantes mínimo:</span> {res.min_participantes}</p>
                <p><span className='fw-bold'>Participantes máximo:</span> {res.max_participantes}</p>
                <p><span className='fw-bold'>Participantes ya inscritos:</span> {num}</p>
              </div>

              <div>
                {
                  auth ? 
                  <button onClick={handleInscripcion} data-id={id} className="btn btn-primary">Inscribirse</button>
                  :
                  <button disabled className="btn btn-primary">Inscribirse</button>
                }
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Course