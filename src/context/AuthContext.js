import { useMemo } from "react";
import { createContext, useState } from "react";

import AuthService from "../services/auth.service";

const data = {
    id: 2,
    email: 'user@uco.es',
    username: 'a12tutim',
    fullname: 'Timmy Turner'
}

const AuthContext = createContext(data);

const AuthProvider = ({children, value}) => {

    const [auth,setAuth] = useState(AuthService.getUser() || value || false);

    const data = {auth,setAuth};

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider};

export default AuthContext;