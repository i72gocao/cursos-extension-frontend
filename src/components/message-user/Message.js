import React,{ useContext } from 'react'

import Info from "./Info"
import MessageContext from '../../context/MessageContext'
import RowData from "./RowData"

const Message = () => {
    
    const {message,setMessage} = useContext(MessageContext);

  return (
    <>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th className='text-center' scope="col">Mensaje</th>
                <th className='text-center'>Eliminar</th>
            </tr>
        </thead>
        <tbody className='align-middle'>
            {/* {data.length === 0 ? <Info/> : data.map((e,i) => <RowData key={i} i={i} id={e.id} titulo={e.titulo} fecha_inicio={e.fecha_inicio} fecha_finalizacion={e.fecha_fin} setData={setData} data={data}/>)} */}
            {message.length === 0 ? <Info/> : message.map((e,i) => <RowData key={i} i={i} id={e.id} titulo={e.title} contenido={e.message} setMessage={setMessage} message={message}/>)}
        </tbody>
    </table>
    </>
  )
}

export default Message