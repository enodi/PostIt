import axios from 'axios';
import * as types from './actionTypes';

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  };
}

export function logInUser(credentials) {
  return (dispatch) => {
    return axios.post('/api/user/signin', credentials)
    .then((res) => {
      // If we get a positive response,
      // Store jwt from response in session storage
      sessionStorage.setItem('jwt', res.jwt);
      // Dispatch loginSuccess action to the reducer
      dispatch(loginSuccess());
    })
  };
}

export function logOutUser() {
  // Remove JWT from sessionStorage when user logs out
  sessionStorage.removeItem('jwt');
  return {
    type: types.LOG_OUT
  };
}

// import axios from 'axios';
// import * as types from './actionTypes';
//
// export function loginSuccess(user) {
//   return {
//     type: types.LOG_IN_SUCCESS,
//     payload: user
//   };
// }
//
// export function logInUser(credentials) {
//   return function (dispatch) {
//     return axios.post('/api/user/signin', credentials)
//     .then((res) => {
//       if (res.status !== 200) {
//         const payload = 'Something went wrong';
//         return dispatch(loginSuccess(payload));
//       }
//       sessionStorage.setItem('jwt', res.jwt);
//       dispatch(loginSuccess());
//     }).catch((error) => {
//       throw (error);
//     });
//   };
// }
//
// export function logOutUser() {
//   sessionStorage.removeItem('jwt');
//   return {
//     type: types.LOG_OUT
//   };
// }
//
// // import axios from 'axios';
// //
// // export default function loginAction(data) {
// //   return (dispatch) => {
// //     return axios.post('/api/user/signin', data);
// //   };
// // }
