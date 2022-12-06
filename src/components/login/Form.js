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

const Form = () => {
  const [form, setForm] = useState(initForm);
  
  const { setAuth } = useContext(AuthContext);
  const {setMessage, setContent} = useContext(MessageContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /******************************** */
  /*const getMessage = (idUser) => {
    
    fetch(process.env.REACT_APP_API_MESSAGE_USER_ALL,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "userid":idUser
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log("adsasdasd: ",result)
      setMessage(result.data.length === 0 ? [] : result.data[0].Messages);
      MessageService.setMessageLS(result.data.length === 0 ? [] : result.data[0].Messages);
      setContent(result);
    })
  }*/
  /******************************** */

  const handleFormSignin = (e) => {
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
      <form onSubmit={handleFormSignin}>
        <div className="form-outline mb-4">
          <input
            type="email"
            onChange={handleChange}
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
            name="password"
            value={form.password}
          />
          <label className="form-label">
            Contraseña
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
              />
              <label className="form-check-label">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </div>

        <div className="text-center">
          {/* <p>
            Not a member? <a href="#!">Register</a>
          </p> */}
          {/* <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
