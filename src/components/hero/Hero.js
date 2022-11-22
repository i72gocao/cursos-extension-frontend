import React from 'react'
import portada from "../../assets/universidad.jpg"

import "./style.css"

const Hero = () => {
    return (
        <section className="py-5 text-center container portada-hero">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="text-light shadow-3">Universidad de Cordoba</h1>
                    <p className="lead text-light fw-light">Cursos de extensión</p>
                    {/* <p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p> */}
                </div>
            </div>
        </section>      
    )
}

export default Hero