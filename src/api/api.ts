
import Axios from "axios";

export const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '66eaa091-b1b1-422c-b2ae-3ed8be8735b4',
  },
  timeout: 2000
});


































