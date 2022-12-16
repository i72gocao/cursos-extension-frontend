import React, { useEffect, useState } from 'react'
import Form from '../../components/form-course/Form'
import Header from '../../components/header/Header';
import Layout from '../../components/layout/Layout';

const dataCourse = {
    id:"0",
    titulo:"",
    descripcion:"",
    precio:"",
    fecha_inicio:"",
    fecha_fin:"",
    fecha_limite_subscripcion:"",
    min_participantes:"",
    max_participantes:"",
    imagen_portada:null
}

const CreateCourse = () => {

    const metadata = {
        method: "POST",
    }

    const [form,setForm] = useState(dataCourse);
    const [ok,setOk] = useState(null);   
    const [clase,setClase] = useState("d-none");   

    useEffect(() => {
        if(ok){
            setClase("");
            setForm(dataCourse);
        }
    },[ok])

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
                            {/* <h3><i className='fas fa-less-than'></i>CrearCursoExtension/<i className='fas fa-greater-than'></i></h3> */}
                            <h3><i className='fas fa-plus'></i> Crear Curso de Extensión</h3>
                        </div> 
                        <Form form={form} setForm={setForm} isCreate={true} urlForm={process.env.REACT_APP_API_CREATE_COURSE} setOk={setOk} metadata={metadata}/>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export {dataCourse};

export default CreateCourse