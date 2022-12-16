import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const formValue = {
    fullname : "",
    username: "",
    email: "",
    
}
//Poner '{handleSubmit}' en los parametros de la arrow function
const Contactar = () => {
    
    const [form,setForm] = useState(formValue);
    const [data, setData] = useState(null);
    // const [roles,setRoles] = useState([]);

    const $alert = useRef();

    const navigate = useNavigate();

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    //En caso de realizar el test es necesario comentar desde las lineas 
    //29 - 81, dado que las pruebas realizan la simulacion de

    const handleSubmit = (e) => {
        e.preventDefault();
        
        for(let prop in form){
            if(form[prop] === ""){
                return;
            }
        }

        try {
            fetch(process.env.REACT_APP_API_CONTACT,{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(form)
            })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setForm(formValue);
                $alert.current.classList.toggle("d-none");
            });
        } catch (error) {
            console.log("Ha ocurrido un error")
        }
    }

    useEffect(() => {
        
        try {
            fetch(process.env.REACT_APP_API_LOAD_ROLES,{
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                }
            })
            .then(res => res.json())
            .then(async rolData => {
                // await setRoles(rolData.data);
            })
        } catch (error) {
            console.log("Error causado en el servidor")
        }

        setTimeout(() => {
            if(data !== null)
                navigate("/");
        }, 3000);
        
    },[data,navigate])

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div ref={$alert} className="alert alert-primary d-none form-group mb-3" role="alert">
                EL formulario de petición de registro ha sido enviado.
            </div>
            <div className='mb-5'>
                <h3>Formulario de Petición de Registro</h3>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fullname">Nombre completo</label>
                <input type="text" onChange={handleInput} value={form.fullname} aria-label="fullname" className="form-control" id="fullname" name="fullname" placeholder="Nombres y apellidos"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="username">Usuario UCO</label>
                <input type="text" onChange={handleInput} value={form.username} aria-label="username" className="form-control" id="username" name="username" placeholder="Usuario UCO"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="emailUCO">Correo Electrónico</label>
                <input type="email" onChange={handleInput} value={form.email} aria-label="email" className="form-control" id="emailUCO" name="email" aria-describedby="emailHelp" placeholder="example@uco.es" pattern="[a-z][0-9]{2}[a-z]{5}@uco.es"/>
            </div>
            {/* <div className="form-group mb-3 bg-danger">
                <label htmlFor="usuarioTipo">Tipo de usuario</label>
                <select className="form-select" aria-label="Default select example" name="rol" onChange={handleInput}>
                    <option defaultValue>-- Rol de usuario --</option>
                    {roles.length > 0 ? roles.map((e,i) => <option key={i} value={e.id}>{e.name}</option>) : ""}
                </select>
            </div> */}
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Contactar