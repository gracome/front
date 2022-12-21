import Axios from './client';
let login = (credentials) => {
    return Axios.post('/user/login', credentials);
}
let register = (user) => {
    return Axios.post('/user/add', user);
}

let changePassword = (user) => {
    return Axios.put('/user/change_password', user);
}
let logout = () => {
    localStorage.removeItem('token');
    
}
let saveToken = (token) => {
     localStorage.setItem('token', token);
}
let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token;
}
export const accountService = {
    login,
    register,
    changePassword,
    logout,
    saveToken,
    isLogged
};