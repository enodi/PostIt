import axios from 'axios';

export default function loginAction(data) {
  return (dispatch) => {
    return axios.post('/api/user/signin', data);
  };
}
