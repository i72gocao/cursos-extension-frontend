import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Form = ({form,setForm,isCreate,urlForm,setOk, metadata}) => {

    const [loadImage,setLoadImage] = useState(null);
    const [controlNumber,setControlNumber] = useState("none");

    const navigate = useNavigate();
    
    const fechas = (fecha) => {
        return fecha.slice(0,10);
    }

    const formDataToJSON = (formData) => {
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        return JSON.stringify(object);
    }

    const deleteValue = (e) => {
        setForm({
            ...form,
            [e.target.name] : ""
        })
    }

    const handleChange = (e) => {

        if(e.target.name === "precio" || e.target.name === "min_participantes" || e.target.name === "max_participantes"){
            if(!isNaN(e.target.value)){
                document.getElementById(e.target.name).classList.add("d-none")
            }else{
                document.getElementById(e.target.name).classList.remove("d-none")
                setControlNumber("El valor introducido no es numérico");
                deleteValue(e);
                return;
            }
            
            if(parseFloat(e.target.value) < 0){
                setControlNumber("El numero introducido debe ser mayor a 0");
                document.getElementById(e.target.name).classList.remove("d-none")
                deleteValue(e);
                return;
            }else{
                document.getElementById(e.target.name).classList.add("d-none")
            }
        }
        
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
    }

    const handleUploadImage = (e) => {
        setLoadImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        for(let key in form)
            if(form[key] === "")
                return;

        try {
            
            let formData = new FormData();
            if(isCreate)
                formData.append("file",loadImage);

            for(let key in form)
                formData.append(`${key}`,form[key])

            if(!isCreate)
                formData = formDataToJSON(formData);
            
            metadata["body"] = formData;

            await fetch(urlForm,metadata)
                .then(res => res.json())
                .then(data => {
                    if(data.status === "OK"){
                        setOk(true);
                        setTimeout(() => {
                            navigate("/admin/pages/manage-courses");
                        },2000);
                    }
                })

        } catch (error) {   
            console.log(error)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="title">Titulo</label>
                <input onChange={handleChange} type="text" required className="form-control" name="titulo" id="title" placeholder="Introduce titulo" defaultValue={form.titulo}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description">Descripción</label>
                <input onChange={handleChange} type="text" required className="form-control" name="descripcion" id="description" placeholder="Introduce descripcion" defaultValue={form.descripcion}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price">Precio</label>
                <input onChange={handleChange} type="text" required className="form-control" name="precio" id="price" placeholder="Introduce precio" defaultValue={form.precio} pattern="[1-9](\d+(?:[.,]\d{2})?)"/>
                <small className='d-none text-danger' id="precio">{controlNumber}</small>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="initDate">Fecha de Inicio</label>
                <input onChange={handleChange} type="date" required className="form-control" name="fecha_inicio" id="initDate" placeholder="Selecciona fecha" defaultValue={form.fecha_inicio !== "" ? fechas(form.fecha_inicio) : ""}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="endDate">Fecha de Finalización</label>
                <input onChange={handleChange} type="date" required className="form-control" name="fecha_fin" id="endDate" placeholder="Selecciona fecha" defaultValue={form.fecha_fin  !== "" ? fechas(form.fecha_fin) : ""}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="limitDate">Fecha de Limite de Inscripción</label>
                <input onChange={handleChange} type="date" required className="form-control" name="fecha_limite_subscripcion" id="limitDate" placeholder="Selecciona fecha" defaultValue={form.fecha_limite_subscripcion !== "" ? fechas(form.fecha_limite_subscripcion) : ""}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="minPar">Participantes Minimo</label>
                <input onChange={handleChange} type="text" required className="form-control" name="min_participantes" id="minPar" placeholder="Introduce Minimo Participantes" defaultValue={form.min_participantes}/>
                <small className='d-none text-danger' id="min_participantes">{controlNumber}</small>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="maxPar">Participantes Máximo</label>
                <input onChange={handleChange} type="text" required className="form-control" name="max_participantes" id="maxPar" placeholder="Introduce Maximo Participantes" defaultValue={form.max_participantes}/>
                <small className='d-none text-danger' id="max_participantes">{controlNumber}</small>
            </div>
            {isCreate ? 
                <div className="form-group">
                    <label htmlFor="imagen">Imagen identificativa</label>
                    <input onChange={handleUploadImage} type="file" className="form-control mb-3" name="imagen_portada" id="imagen_portada" placeholder="Selecciona imagen"/>
                </div>
                : 
                ""
            }
            <button type="submit" className="btn btn-primary">{isCreate ? "Crear Datos" : "Modificar Datos"}</button>
        </form>
    )
}

export default Form