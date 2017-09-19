import jwt from 'jsonwebtoken';

class authenticate {
  // Handles authentication
  static authentication(req, res, next) {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if (token) {
      // Verifies token
      jwt
        .verify(token, req.app.get('jwtSecret'), (err, decoded) => {
          if (err) {
            return res.json({ error: true });
          }
          req.decoded = decoded;
          next();
        });
    } else {
      // If token isn't provided
      return res.status(403).send({
        error: true,
        message: 'Unauthorised user'
      });
    }
  }
}
export default authenticate;
