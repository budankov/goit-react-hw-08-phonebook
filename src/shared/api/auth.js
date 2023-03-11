import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const singup = data => {
  return authInstance.post('/users/singup', data);
};
