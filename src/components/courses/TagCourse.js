import React, { useContext } from "react";
import { Link } from "react-router-dom";

import cursos from "../../assets/curso-extension.jpg"
import AuthContext from "../../context/AuthContext";
import { fechaFormatoInternacional } from "../../utils/fechas";

import "./style.css";

const TagCourse = ({id,titulo,fecha_inicio,imagen,max_participantes}) => {
  const {auth} = useContext(AuthContext);

  return (
    <div className="col">
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
                <Link to={`/pages/course-subscripcion/${id}`} className="btn btn-sm btn-outline-secondary">
                  Inscribirse
                </Link>
              :
                <button disabled="disabled" type="button" className="btn btn-sm btn-outline-secondary">
                  Inscribirse
                </button>
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
                <small className="text-muted"><i className="fas fa-restroom"></i> 0/{max_participantes ? max_participantes : 10}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCourse;
