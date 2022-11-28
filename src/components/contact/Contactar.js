import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const formValue = {
    fullname : "",
    username: "",
    email: ""
}
const Contactar = () => {
    
    const [form,setForm] = useState(formValue);
    const [data, setData] = useState(null);

    const $alert = useRef();

    const navigate = useNavigate();

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

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
        // console.log(form);
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
            <div className="form-group mb-3">
                <label htmlFor="fullname">Nombre completo</label>
                <input type="text" onChange={handleInput} value={form.fullname} className="form-control" id="fullname" name="fullname" placeholder="Nombres y apellidos"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="username">Usuario UCO</label>
                <input type="text" onChange={handleInput} value={form.username} className="form-control" id="username" name="username" placeholder="Usuario UCO"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="emailUCO">Correo Electrónico</label>
                <input type="email" onChange={handleInput} value={form.email} className="form-control" id="emailUCO" name="email" aria-describedby="emailHelp" placeholder="example@uco.es" pattern="[a-z][0-9]{2}[a-z]{5}@uco.es"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Contactar