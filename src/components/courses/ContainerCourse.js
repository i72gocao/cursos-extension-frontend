import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import TagCourse from "./TagCourse";


//Faltaria hacer la consulta para obtener el numero de miembros inscritos en un determinad curso

const ContainerCourse = () => {

  const [data,setData] = useState([]);
  const {auth} = useContext(AuthContext); 
  // const [authentication,setAuthentication] = useState(auth ? auth : false);
  
  

  useEffect(() => {
    function getAllCourses() {
      try {
        fetch(process.env.REACT_APP_API_LOAD_HOME,{
          methd: "GET",
          headers: {
            "Content-Type":"application/json"
          }
        }).then(res => res.json())
        .then(data => {
          setData(data.data);
        })
      } catch (error) {
        console.log("Ha ocurrido un error al cargar los datos en el Home");
      }
    }
  
    function getAllCoursesByUser() {
      try {
        fetch(process.env.REACT_APP_API_SHOW_COURSE_BY_USER,{
          method: "GET",
          headers: {
            "Content-Type":"application/json",
            "id": auth.id
          }
        }).then(res => res.json())
        .then(data => {
          setData(data.data);
        })
      } catch (error) {
        console.log("Ha ocurrido un error al cargar los datos en el Home");
      }
    }

    // const example = document.querySelector("#multiCollapseExample1");
    // setTimeout(()=> {
    //   example.classList.add("collapsing");
    //   example.classList.remove("collapsing");
    //   example.classList.remove("show");
    // },5000)
    
    if(auth){
      getAllCoursesByUser()
    }else
      getAllCourses()
      
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* <TagCourse/>
              <TagCourse/>
              <TagCourse/> */}
              {data.map((e,i) => <TagCourse key={i} id={e.id} titulo={e.titulo} imagen={e.imagen_portada} fecha_inicio={e.fecha_inicio} max_participantes={e.max_participantes} min_participantes={e.min_participantes}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerCourse;
