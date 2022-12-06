import { useEffect, createContext, useState } from "react";

import MessageService from "../services/message.service";

const MessageContext = createContext();

const MessageProvider = ({children}) => {

    const [message,setMessage] = useState(MessageService.getMessageLS || null);
    const [content,setContent] = useState(null);

    useEffect(() => {
        MessageService.setMessageLS(message)
    },[message])

    const data = {message,setMessage, content,setContent}

    return <MessageContext.Provider value={data}>
        {children}
    </MessageContext.Provider>
}

export {MessageProvider}

export default MessageContext;