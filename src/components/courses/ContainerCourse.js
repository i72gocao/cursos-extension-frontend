import React, { useEffect, useState } from "react";
import TagCourse from "./TagCourse";


//Faltaria hacer la consulta para obtener el numero de miembros inscritos en un determinad curso

const ContainerCourse = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
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
  }, []);
  
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* <TagCourse/>
            <TagCourse/>
            <TagCourse/> */}
            {data.map((e,i) => <TagCourse key={i} id={e.id} titulo={e.titulo} imagen={e.imagen_portada} fecha_inicio={e.fecha_inicio} max_participantes={e.max_participantes} min_participantes={e.min_participantes}/>)}
        </div>
      </div>
    </div>
  );
};

export default ContainerCourse;
