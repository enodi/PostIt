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
   * @param  {object} req  request object
   * @param  {object} res  response object
   * @param  {function} next callback function
   *
   * @return {void} no return or void
   */
  static isLoggedIn(req, res, next) {
    const token = req.headers.authorization ||
      req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, key, (error, decoded) => {
        if (error) {
          res.status(401)
            .send({
              success: false,
              message: 'Failed to Authenticate Token',
              error
            });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401)
        .send({
          success: false,
          message: 'Access denied, Authentication token does not exist'
        });
    }
  }
}
export default authenticate;
