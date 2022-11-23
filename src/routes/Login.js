import React from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Form from "../components/login/Form";

const Login = () => {
  return (
    <Layout>
      <Header />
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div></div>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
