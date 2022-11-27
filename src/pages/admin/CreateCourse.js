import React, { useEffect, useRef, useState } from 'react'
import Form from '../../components/form-course/Form'
import Header from '../../components/header/Header';
import Layout from '../../components/layout/Layout';

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

const CreateCourse = () => {

    const $alert = useRef();

    const [form,setForm] = useState(dataCourse);
    const [ok,setOk] = useState(null);   
    const [clase,setClase] = useState("d-none");   

    useEffect(() => {
        if(ok){
            setClase("");
            setForm(dataCourse);
        }
    },[$alert,ok])

    /*
    const handleCreate = (e) => {
        try {
            
            fetch(process.env.REACT_APP_API_CREATE_COURSE,{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(form)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.status);
                setOk(data.status);
            });

        } catch (error) {
            console.log("Ha ocurrido un error al intentar guardar los datos del curso.");
        }
    }*/

    return (
        <Layout>
            <Header />
            <div className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
                    <div>
       
                    </div>
                    <div>
                        <div ref={$alert} className={`alert alert-primary alert-dismissible fade show ${clase}`} role="alert">
                            <strong>Well Done!</strong> Se ha guardado con éxito los datos.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                        <Form form={form} setForm={setForm} isCreate={true} urlForm={process.env.REACT_APP_API_CREATE_COURSE} setOk={setOk}/>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export {dataCourse};

export default CreateCourse