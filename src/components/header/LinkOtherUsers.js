import React from "react";
import { Link } from "react-router-dom";

const LinkSesion = () => {
  return (
    <div className="col-sm-4 offset-md-1 py-4">
      <h4 className="text-white">¿Qué hacer...?</h4>
      <ul className="list-unstyled">
        <li>
          <Link to="/auth/signin" className="text-white">
            Iniciar Sesión
          </Link>
        </li>
        <li>
          <Link to="/pages/contact-us" className="text-white">
            Contactar Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkSesion;
