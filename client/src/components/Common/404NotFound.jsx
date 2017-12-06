import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div className="container center">
    <h1>404 NOT FOUND</h1>
    <p>This Page doesn't exist.
    Click the link below to return back to the home page</p>
    <Link to="/">HOME</Link>
  </div>
);

export default NotFound;
