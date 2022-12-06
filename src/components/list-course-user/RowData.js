import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';


const RowData = ({i,id,queue,titulo,fecha_inicio,fecha_finalizacion,setData,data}) => {

    const $id = useRef();

    const {auth} = useContext(AuthContext);

    const estados = () => {
        const inicio = new Date(fecha_inicio);
        const final = new Date(fecha_finalizacion);
        const hoy = new Date();

        if(queue === 1){
            if(inicio > hoy)
                return <span className='text-warning fw-bold'>En lista de espera</span>
            
            if(inicio <= hoy)
                return <span className='text-danger fw-bold'>No Admitido</span>
        }
        
        if(inicio > hoy){
            return <span className='text-success fw-bold'>Pendiente</span>
        }else if(inicio <= hoy && final >= hoy){
            return <span className='text-primary fw-bold'>En curso</span>
        }else if(final < hoy){
            return <span className='text-danger fw-bold'>Realizado</span>
        }
    }

    const reverseDate = (fecha) => {
        let aux = new Date(fecha).toISOString("es-ES").slice(0,10);
        return aux.split("-").reverse().join("-");
    }

    //handle Delete Course   
    const handleDeleteCourse = (e) => {
        fetch(process.env.REACT_APP_API_DELETE_USER_COURSE,{
            method: "DELETE",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                courseId: $id.current.id,
                userId: auth.id,
                titulo:titulo
            })
        })        
        .then(res => res.json())
        .then(result => {
            const resultado = modifyData()
            setData(resultado)
        })
    }

    const modifyData = () => {
        return data.filter(ob => ob.id !== parseInt($id.current.id));
    }
    
    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{titulo}</td>
            <td className='text-center'>{reverseDate(fecha_inicio)}</td>
            <td className='text-center'>{reverseDate(fecha_finalizacion)}</td>
            <td className='text-center'>
                {/* {new Date(fecha_inicio) > new Date() ? <span className='text-success fw-bold'>Pendiente</span> : <span className='text-danger'>Realizado</span>} */}
                {estados()}
            </td>
            <td>
                <div className="d-flex justify-content-center">

                    <div title="Borrar inscripción en curso">
                        <button ref={$id} className="btn btn-dark" id={id} onClick={handleDeleteCourse}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default RowData