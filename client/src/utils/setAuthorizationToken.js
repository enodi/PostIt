import axios from 'axios';


/**
 *
 * @export setAuthorizationToken
 * @param {any} token
 */
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-access-token'];
  }
}
