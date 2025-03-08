import axios from 'axios';

const URL = 'https://json-sever-jwt.onrender.com';

//signup
const registerUserService =  (data) => axios.post (`${URL}/register`, data) //https://json-sever-jwt.onrender.com/register {json}

//login
const loginUserService =  (data) => axios.post (`${URL}/login`, data)  // https://json-sever-jwt.onrender.com/login {json}

const getMeUserService = (jwtToken) => axios.post ('${URL}/users/me', {header: {Authorization: `Bearer ${jwtToken}`}})

export default  {registerUserService, loginUserService, getMeUserService};