import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Form from '../../components/form-course/Form'
import Header from '../../components/header/Header'
import Layout from '../../components/layout/Layout'

import { dataCourse } from './CreateCourse'

const UpdateCourse = () => {

  const {id} = useParams();

  const [form,setForm] = useState(dataCourse);
  const [ok,setOk] = useState(null);  
  const [clase,setClase] = useState("d-none");   

  
  const metadata = {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    }
  }
 
  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_GET_COURSE,{
          method:"GET",
          headers:{
              "Content-Type":"application/json",
              "id":`${id}`
          }
      })
      .then(res => res.json())
      .then(data => {
        setForm(data.data);
      })
    } catch (error) {
        console.log("No se pudo obtener los datos para el curso");
    }

    if(ok){
      setClase("");
      setForm(dataCourse);
    }
    
  }, [id,ok])
  
  return (
    <Layout>
    <Header />
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
          <div>        
          </div>
          <div>
            <div className={`alert alert-primary alert-dismissible fade show ${clase}`} role="alert">
              <strong>Well Done!</strong> Se ha guardado con éxito los datos.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> 
            <div className='mb-4'>
              <h3><i className='fas fa-pencil-alt'></i> Modificar Curso de Extensión</h3>
            </div> 
            <Form form={form} setForm={setForm} isCreate={false} urlForm={process.env.REACT_APP_API_UPDATE_COURSE} setOk={setOk} metadata={metadata}/>
         </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default UpdateCourse