const jwt = require('jsonwebtoken');

module.exports = {
  // Handles authentication
  authentication(req, res, next) {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if (token) {
      // Verifies token
      jwt.verify(token, 'Andela', (err, decoded) => {
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
        message: 'No token was provided'
      });
    }
  }
};
