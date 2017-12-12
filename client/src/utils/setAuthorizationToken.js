import axios from 'axios';


/**
 *
 * @export setAuthorizationToken
 * @param {any} token
 *
 * @returns {void}
 */
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-access-token'];
  }
}
