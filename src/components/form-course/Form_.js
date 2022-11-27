import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";

const FormMod = ({handleSubmit,form,setForm,isCreate,urlImage}) => {

    const $image = useRef();
    const [loadImage,setLoadImage] = useState(null);
    
    const fechas = (fecha) => {
        return fecha.slice(0,10);
    }

    const handleChangeImage = async (e) => {
        const imagen = e.target;
        const file = imagen.files[0];
        let formData = new FormData();
        formData.append("file",file);
        await setForm({
            ...form,
            "imagen_portada" : formData
        });
        
    }

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
    }

    const handleUploadImage = (e) => {
        setLoadImage(e.target.files[0]);
    }

    const handleImage = async (e) => {
        e.preventDefault();
        try {
            await fetch(urlImage,{
                method:"POST",
                body: form
            }).then(res => res.json())
            .then(data => console.log("DATAAAOSSS: ",data))

        } catch (error) {   
            console.log(error)
        }
    }
    
  return (
    <form onSubmit={handleImage}>
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
            <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_inicio" id="initDate" placeholder="Selecciona fecha" defaultValue={form.fecha_inicio !== "" ? fechas(form.fecha_inicio) : ""}/>
        </div>
        <div className="form-group">
            <label htmlFor="endDate">Fecha de Finalización</label>
            <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_fin" id="endDate" placeholder="Selecciona fecha" defaultValue={form.fecha_fin  !== "" ? fechas(form.fecha_fin) : ""}/>
        </div>
        <div className="form-group">
            <label htmlFor="limitDate">Fecha de Limite de Inscripción</label>
            <input onChange={handleChange} type="date" className="form-control mb-3" name="fecha_limite_subscripcion" id="limitDate" placeholder="Selecciona fecha" defaultValue={form.fecha_limite_subscripcion !== "" ? fechas(form.fecha_limite_subscripcion) : ""}/>
        </div>
        <div className="form-group">
            <label htmlFor="minPar">Participantes Minimo</label>
            <input onChange={handleChange} type="text" className="form-control mb-3" name="min_participantes" id="minPar" placeholder="Introduce Minimo Participantes" defaultValue={form.min_participantes}/>
        </div>
        <div className="form-group">
            <label htmlFor="maxPar">Participantes Máximo</label>
            <input onChange={handleChange} type="text" className="form-control mb-3" name="max_participantes" id="maxPar" placeholder="Introduce Maximo Participantes" defaultValue={form.max_participantes}/>
        </div>
        <div className="form-group">
            <label htmlFor="imagen">Imagen identificativa</label>
            <input onChange={handleChangeImage} type="file" className="form-control mb-3" name="imagen_portada" id="imagen_portada" placeholder="Selecciona imagen"/>
        </div>
        <button type="submit" className="btn btn-primary">{isCreate ? "Crear Datos" : "Modificar Datos"}</button>
  </form>
  )
}

export default FormMod