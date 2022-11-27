import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../components/header/Header'
import Layout from '../../components/layout/Layout'

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

const UpdateCourse = () => {

  const {id} = useParams();
  const [form,setForm] = useState(dataCourse);

  const fechas = (fecha) => {
    return fecha.slice(0,10);
  }

  const handleUpdate = (e) => {
    try {
        fetch(process.env.REACT_APP_API_UPDATE_COURSE,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    } catch (error) {
        console.log("Ha ocurrido un error al actualizar los datos ");
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    // console.log("Dentro: ",form);
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
    
  }, [id])
  
  return (
    <Layout>
    <Header />
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
          <div>        
          </div>
         <div>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input onChange={handleChange} type="text" className="form-control mb-3" name="titulo" id="title" placeholder="Introduce titulo" defaultValue={form.titulo}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input onChange={handleChange} type="text" className="form-control mb-3" name="descripcion" id="description" placeholder="Introduce descripcion" defaultValue={form.descripcion}/>
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input onChange={handleChange} type="text" className="form-control mb-3" name="precio" id="price" placeholder="Introduce precio" defaultValue={form.precio}/>
            </div>
            <div className="form-group">
              <label htmlFor="initDate">Fecha de Inicio</label>
              <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_inicio" id="initDate" placeholder="Selecciona fecha" defaultValue={fechas(form.fecha_inicio)}/>
            </div>
            <div className="form-group">
              <label htmlFor="endDate">Fecha de finalización</label>
              <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_fin" id="endDate" placeholder="Selecciona fecha" defaultValue={fechas(form.fecha_fin)}/>
            </div>
            <div className="form-group">
              <label htmlFor="limitDate">Fecha de Limite de Inscripción</label>
              <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_limite_subscripcion" id="limitDate" placeholder="Selecciona fecha" defaultValue={fechas(form.fecha_limite_subscripcion)}/>
            </div>
            <div className="form-group">
              <label htmlFor="minPar">Participantes Minimo</label>
              <input onChange={handleChange} type="text" className="form-control mb-3" name="min_participantes" id="minPar" placeholder="Introduce Minimo Participantes" defaultValue={form.min_participantes}/>
            </div>
            <div className="form-group">
              <label htmlFor="maxPar">Participantes Minimo</label>
              <input onChange={handleChange} type="text" className="form-control mb-3" name="max_participantes" id="maxPar" placeholder="Introduce Maximo Participantes" defaultValue={form.max_participantes}/>
            </div>
            <div className="form-group">
              <label htmlFor="imagen">Imagen identificativa</label>
              <input type="file" className="form-control mb-3" name="imagen_portada" id="imagen" placeholder="Selecciona imagen" defaultValue={""}/>
            </div>
            <button type="submit" className="btn btn-primary">Modificar Datos</button>
          </form>
         </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default UpdateCourse