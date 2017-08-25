import axios from 'axios';

export const userSignupRequest = userData => (dispatch) => {
  axios.post('http:localhost:3001/api/user/signup', userData);
};
