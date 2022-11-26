import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';

const AddUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
          
        // try {
        //     fetch(process.env.REACT_APP_API_ACCEPT_MESSAGE,{
        //         method:"POST",
        //         headers: {
        //             "Content-Type":"application/json"
        //         },
        //         body: JSON.stringify({id})
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("DAtos recibidos: ",data);
        //     })
        //     //REACT_APP_API_DELETE_MESSAGE
        // } catch (error) {
        //     console.log("Ocurrió un error");
        // }
        
        navigate("/admin/pages/messages");
    
    }, [navigate,id]);
    
  return (
    <div>AddUser</div>
  )
}

export default AddUser