import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'

import Info from "./Info"
import RowData from './RowData'

const ListCourse = () => {

    const {auth} = useContext(AuthContext);
    const [data,setData] = useState([]);


    useEffect(() => {
      
        try {
            
            fetch(process.env.REACT_APP_API_LIST_USER_COURSE,{
                method:"GET",
                headers: {
                    "Content-Type":"application/json",
                    "id":auth.id
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data.data);
            })
        } catch (error) {
            
        }

    }, [auth])
    

    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th className='text-center' scope="col">Fecha de inicio</th>
                    <th className='text-center' scope="col">Fecha de finalización</th>
                    <th className='text-center' scope="col">Estado</th>
                    <th className='text-center'>Eliminar</th>
                </tr>
            </thead>
            <tbody className='align-middle'>
                {data.length === 0 ? <Info/> : data.map((e,i) => <RowData key={i} queue={e["user_courses.queue"]} i={i} id={e.id} titulo={e.titulo} fecha_inicio={e.fecha_inicio} fecha_finalizacion={e.fecha_fin} setData={setData} data={data}/>)}
            </tbody>
        </table>
        </>
    )
}

export default ListCourse