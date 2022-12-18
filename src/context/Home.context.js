import { createContext, useState } from "react"

const HomeContext = createContext();

const HomeProvider = ({children}) => {

    const [data,setData] = useState([]);

    const datos = {data,setData}

    return <HomeContext.Provider value={datos}>
        {children}
    </HomeContext.Provider>
}

export {HomeProvider}

export default HomeContext;