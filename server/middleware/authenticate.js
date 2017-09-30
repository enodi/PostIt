import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const key = process.env.JWT_SECRET;
class authenticate {
  // Handles authentication
  static authentication(req, res, next) {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if (token) {
      // Verifies token
      jwt
        .verify(token, key, (err, decoded) => {
          if (err) {
            return res.status(404).json({ error: true });
          }
          req.decoded = decoded;
          next();
        });
    } else {
      // If token isn't provided
      return res.status(401).send({
        message: 'Unauthorised user'
      });
    }
  }
  /**
   * isLoggedIn - checks if a user looged in
   * @param  {object} req  request object
   * @param  {object} res  response object
   * @param  {function} next callback function
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
