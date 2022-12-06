import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/AuthContext";

import AuthService from "../services/auth.service";
import MessageService from "../services/message.service";

const Logout = () => {
    const {setAuth} = useContext(AuthContext);
    const service = AuthService;
    const navigate = useNavigate();

    useEffect(() => {
        
        service.removeUser();
        MessageService.removeMessageLS();
        setAuth(false);
        let timeout = setTimeout(() => {
            navigate("/");
        }, 1000);
        

    }, [navigate, service]);

    return (
    <>
        <Layout>
            <Header/>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <h2>Cerrando sesión...</h2>
                    </div>
                </div>
            </div>
        </Layout>
    </>
    );
};

export default Logout;
