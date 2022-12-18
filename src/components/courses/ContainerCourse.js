import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";
import TagCourse from "./TagCourse";

import CourseService from "../../services/courses.service"

const ContainerCourse = () => {

  const [data,setData] = useState([]);
  const {auth} = useContext(AuthContext); 

  
  useEffect(() => {
    const {getAllCoursesByUser,getAllCourses} = CourseService;
        
    if(auth){
      getAllCoursesByUser(auth.id,setData)
    }else
      getAllCourses(setData)
      
  },[auth]);
  
  return (
    <>
      <p>
        {/* <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a> */}
        {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button> */}
        
      </p>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1" data-bs-auto-close="true">
                <div className="alert alert-success" role="alert">
                  Se ha inscrito en el curso de extensión con éxito!
                </div>
              </div>
            </div>
          </div>  
          {
            data.length === 0 && auth ? 
            (<div className="text-center p-4 mt-4">
              <div>
                <h3>No se encuentran más cursos disponibles para que se pueda inscribir</h3>
              </div>
            </div>)
            :
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {data.map((e,i) => <TagCourse key={i} id={e.id} titulo={e.titulo} imagen={e.imagen_portada} fecha_inicio={e.fecha_inicio} max_participantes={e.max_participantes} min_participantes={e.min_participantes} data={data} setData={setData}/>)}
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ContainerCourse;
