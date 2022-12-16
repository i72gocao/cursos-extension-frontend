import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import MessageContext from "../../context/MessageContext";
import MessageService from "../../services/message.service";
import { fechaFormatoInternacional } from "../../utils/fechas";

import cursos from "../../assets/curso-extension.jpg"

import "./style.css";

const TagCourse = ({id,titulo,fecha_inicio,imagen,max_participantes,min_participantes}) => {

  const {auth} = useContext(AuthContext);
  const {setMessage,setContent} = useContext(MessageContext);

  const [num,setNum] = useState(0);

  const $div = useRef();

  const navigate = useNavigate();

  const handleInscription = (e) => {
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
      }).then(res => res.json())
      .then(data => {

        if(data.status === "OK"){
          MessageService.getMessageByUser(auth.id,setMessage,setContent);
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
    <div ref={$div} className="col">
      <div className="card shadow-sm">

        <img src={imagen ? `${process.env.REACT_APP_API_DOMAIN}/uploads/public/images/${imagen}` : cursos} alt="curso de extension" className="bd-placeholder-img card-img-top"/>

        <div className="card-body">
          <p className="card-text">
            {/* <Link to={`/pages/course-descripcion/${id}`}> */}
            <Link to={`/pages/course-descripcion/${id}`} className="text-decoration-none text-black">
                {titulo ? titulo : "Curso de extension de la universidad de Cordoba"}
            </Link>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {/* <Link to={`/pages/course-subscripcion/${id}`} */}
              {auth ? 
                // <Link to={`/pages/course-subscripcion/${id}`} className="btn btn-sm btn-outline-secondary">
                //   Inscribirse
                // </Link>
                <div>
                  <button id={id} type="button" className="btn btn-sm btn-outline-secondary" onClick={handleInscription} data-bs-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                    Inscribirse
                  </button>
                  {/* <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a> */}
                </div>
              :
                <div>

                  <button disabled type="button" className="btn btn-sm btn-outline-secondary">
                    Inscribirse
                  </button>
                </div>
              }



              {/* <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button> */}
            </div>
            <div className="d-flex flex-column align-items-end">
                <small className="text-muted"><span className="fw-bold">INICIO: </span>{fecha_inicio ? fechaFormatoInternacional(fecha_inicio) : "01/01/2024"}</small>
                <small className="text-muted"><i className="fas fa-restroom"></i> {num < min_participantes ? <span className="text-danger fw-bold">{num}</span> : <span className="text-primary fw-bold">{num}</span>}/{max_participantes ? max_participantes : 10}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCourse;
