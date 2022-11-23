const setUser = (user) => {
    delete user.id;
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    localStorage.setItem("user",JSON.stringify(user));
}

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const removeUser = () => {
    localStorage.removeItem("user");
}

const AuthService = {
    setUser,
    getUser,
    removeUser
}

export default AuthService;