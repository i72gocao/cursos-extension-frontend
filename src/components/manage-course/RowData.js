import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const RowData = ({i,id,titulo,min_participantes,max_participantes,updateData,setData,data}) => {

    const $id = useRef();
    const [idElement,setIdElement] = useState(null);
    
    useEffect(() => {
        setIdElement($id.current.id);
    }, [])

    //handle Delete Course
    const handleDelete = (e) => {
        try {

            const ID = $id.current.id;

            fetch(process.env.REACT_APP_API_DELETE_COURSE,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id:ID})
            })
            .then(res => res.json())
            .then(data => console.log("Borrado: ",data.status));

            updateData(data,ID);

        } catch (error) {
            console.log("Ha ocurrido un error al eliminar un curso");
        }
    }
    
    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{titulo}</td>
            <td>{min_participantes}</td>
            <td>{max_participantes}</td>
            <td>
                <Link to={`/admin/pages/manage-courses/update/${id}`} className="btn btn-dark">
                    <i className="fas fa-pencil-alt"></i>
                </Link>
                {/* <button ref={$id} onClick={handleUpdate} className="btn btn-dark" id={id}><i className="fas fa-check-double"></i></button> */}
                &nbsp;
                <button ref={$id} onClick={handleDelete} className="btn btn-dark" id={id}><i className="fas fa-eraser"></i></button>
            </td>
        </tr>
    )
}

export default RowData