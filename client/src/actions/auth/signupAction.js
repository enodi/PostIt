import axios from 'axios';

export function signupAction(userData) {
  return (dispatch) => {
    return axios.post('/api/user/signup', userData)
    .then((res) => {
      console.log(res);
    });
  };
}
