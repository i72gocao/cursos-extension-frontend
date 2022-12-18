
const setMessageLS = (message) => {
    localStorage.setItem("message",JSON.stringify(message))
}

const getMessageLS = () => {
    return JSON.parse(localStorage.getItem("message"));
}

const removeMessageLS = () => {
    localStorage.removeItem("message");
}

const getMessageByUser = (idUser,setMessage,setContent) => {
    
    fetch(process.env.REACT_APP_API_MESSAGE_USER_ALL,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "userid":idUser
      }
    })
    .then(res => res.json())
    .then(result => {
      
      setMessage(result.data.length === 0 ? [] : result.data[0].Messages);
      setMessageLS(result.data.length === 0 ? [] : result.data[0].Messages);
      setContent(result);
    })
}

const MessageService = {
    setMessageLS,
    getMessageLS,
    removeMessageLS,
    getMessageByUser
}

export default MessageService;