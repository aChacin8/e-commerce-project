import axios from 'axios';

const URL = 'https://json-sever-jwt.onrender.com/';

//signup
const registerUserService = async (data) => axios.post (`${URL}/register`, data) //https://json-sever-jwt.onrender.com/register {json}

//login
const loginUserService = async (data) => axios.post (`${URL}/login`, data)  // https://json-sever-jwt.onrender.com/login {json}

export {registerUserService, loginUserService};