const RowData = ({i,id,titulo,contenido,setMessage,message}) => { 
  
  const handleReady = (e) => {
    
    const $id = e.target.id;
    const manageMessage = (id) => {
      return message.filter(ob => ob.id !== parseInt(id));
    }
    
    try {
      fetch(process.env.REACT_APP_API_MODIFY_MESSAGE_USER,{
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          messageId: $id
        })
      })
      .then(res => res.json())
      .then(result => {
        console.log("resultado_: ", result)
        const newPackMessgae = manageMessage($id);
        setMessage(newPackMessgae);
      })
    } catch (error) {
      
    }

  }
  return (
    <>
            <tr>
            <th scope="row">{i+1}</th>
            <td>{titulo}</td>
            <td>{contenido}</td>
            <td>
                <div className="d-flex justify-content-center">

                    <div title="Borrar inscripción en curso">
                        <button className="btn btn-dark" id={id} onClick={handleReady}>
                            Marcar como leído
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    </>
  )
}

export default RowData