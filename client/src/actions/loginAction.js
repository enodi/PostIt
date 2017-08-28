import axios from 'axios';

const loginAction = data => (dispatch) => {
  axios.post('/api/user/signin', data);
};

export default loginAction;
