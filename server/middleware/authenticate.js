import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const key = process.env.JWT_SECRET;


/**
 * This class handles user authentication
 * @class authenticate
 */
class authenticate {
  /**
   * This method checks if a user logged in
   * @param  {object} request  request object
   * @param  {object} response  response object
   * @param  {function} next callback function
   *
   * @return {void} no return or void
   */
  static isLoggedIn(request, response, next) {
    const token = request.headers.authorization ||
      request.headers['x-access-token'];
    if (token) {
      jwt.verify(token, key, (error, decoded) => {
        if (error) {
          response.status(401)
            .send({
              success: false,
              message: 'Failed to Authenticate Token',
              error
            });
        } else {
          request.decoded = decoded;
          next();
        }
      });
    } else {
      return response.status(401)
        .send({
          success: false,
          message: 'Access denied, Authentication token does not exist'
        });
    }
  }
}
export default authenticate;
