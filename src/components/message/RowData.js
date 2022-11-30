import React, { useRef } from 'react'

const RowData = ({i,index,fullname,username,email,setData,data}) => {

    const $id = useRef();

    const updateData = async (data,pos) => {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].id !== parseInt(pos)){
                newData.push(data[i]);
            }
        }
        await setData(newData);
    }
    
    const handleUser = (e) => {
        //console.log("button", e.target.id)
        const ID = $id.current.id;

        try {
            
            fetch(process.env.REACT_APP_API_ACCEPT_MESSAGE,{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({id:ID})
            })
            .then(res => res.json())
            .then(data => {
                if(data.status === "OK"){
                    fetch(process.env.REACT_APP_API_DELETE_MESSAGE,{
                        method: "DELETE",
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify({id:ID})
                    }).then(res => res.json())
                    .then(data => console.log("ELIMINACION: ",data))
                }
            });
            
        } catch (error) {
            console.log("Ocurrió un error");
        }

        updateData(data,ID);
    }

    const handleDeleteMessage = (e) => {
        const ID = $id.current.id;
        try {
            fetch(process.env.REACT_APP_API_DELETE_MESSAGE,{
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({id:ID})
            })
            .then(res => res.json())
            .then(data => console.log("ELIMINACION: ",data));

        } catch (error) {
            console.log("Error en el servidor al intentar eliminar un mensaje");
        }
        updateData(data,ID);
    }

    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{fullname}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <div className='d-flex'>
                    <div title="Aceptar mensaje">
                        <button ref={$id} onClick={handleUser} className="btn btn-dark" id={index}><i className="fas fa-check-double"></i></button>
                    </div>
                    &nbsp;
                    <div title="Borrar mensaje">
                        <button onClick={handleDeleteMessage} className="btn btn-dark" id={index}><i className="fas fa-eraser"></i></button>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default RowData