import React, { useEffect, useState } from "react";
import TagCourse from "./TagCourse";

const dataCourse = {
  id:"",
  titulo:"",
  descripcion:"",
  precio:"",
  fecha_inicio:"",
  fecha_fin:"",
  fecha_limite_subscripcion:"",
  min_participantes:"",
  max_participantes:"",
  imagen_portada:""
}
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
  }, [])
  
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <TagCourse/>
            <TagCourse/>
            <TagCourse/>
            {data.map((e,i) => <TagCourse key={i} id={e.id} titulo={e.titulo} fecha_inicio={e.fecha_inicio} max_participantes={e.max_participantes}/>)}
            {/* {data.map((e,i) => console.log("Element: ",e))} */}
        </div>
      </div>
    </div>
  );
};

export default ContainerCourse;