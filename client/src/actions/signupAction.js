import axios from 'axios';

export function signupAction(userData) {
  return dispatch => {
    return axios.post('/api/user/signup', userData);
  }
}

// import * as actionTypes from './actionTypes';
//
// const signupAction = userData => (dispatch) => {
//   axios.post('/api/user/signup', userData)
//   .then((res) => {
//     return dispatch({
//       type: actionTypes.SIGNUP_SUCCESSFUL,
//       payload: res.userData
//     });
//   });
// };
//
// export default signupAction;
