import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import MessageContext from "../../context/MessageContext";

import AuthService from "../../services/auth.service";
import MessageService from "../../services/message.service";

const initForm = {
  email: "",
  password: "",
};

//Poner '{handleSubmit}' en los parametros de la arrow function Form para realizar el test
const Form = () => {
  const [form, setForm] = useState(initForm);
  
  //Comentar las lineas 19 - 22 para realizar el test
  const { setAuth } = useContext(AuthContext);
  const {setMessage, setContent} = useContext(MessageContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  //Comentar las lineas 31 - 59 para realizar el test
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email === "" || form.password === ""){
      return;
    }

    try {
      fetch(process.env.REACT_APP_API_SIGNIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if(data.data){
            setAuth(data.data);
            MessageService.getMessageByUser(data.data.id ? data.data.id : [],setMessage,setContent);
            AuthService.setUser(data.data);
            navigate("/");
          }else{
            navigate("/error/page/401");
          }
        });
    } catch (error) {
        console.log("No se pudo realizar el login");
    }
  };
  
  return (
    <div>
      <div className="mb-5">
        <h3>Form de acceso</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            onChange={handleChange}
            aria-label="email"
            className="form-control"
            name="email"
            value={form.email}
          />
          <label className="form-label">Correo electronico</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            onChange={handleChange}
            className="form-control"
            aria-label="password"
            name="password"
            value={form.password}
          />
          <label className="form-label ">
            Contraseña
          </label>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
