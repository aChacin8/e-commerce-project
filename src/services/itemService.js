import axios from 'axios';
import { get } from 'react-hook-form';
import { data } from 'react-router-dom';

const URL = 'https://json-sever-jwt.onrender.com';

const getAllItemService = () => axios.get (`${URL}/items`, data);

const getOneItemService = (id) => axios.get (`${URL}/items/${id}`,data);

const createItemService = (data, token) => axios.post (`${URL}/items`, data, {headers: {Authorzation:`Bearer ${token}`}});


export   {getAllItemService, getOneItemService, createItemService};