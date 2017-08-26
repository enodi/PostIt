import axios from 'axios';

export const userSignupRequest = userData => (dispatch) => {
  axios.post('/api/user/signup', userData);
}
