import { createContext, useState } from "react";

import AuthService from "../services/auth.service";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth,setAuth] = useState(AuthService.getUser() || false);

    const data = {auth,setAuth};

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider};

export default AuthContext;