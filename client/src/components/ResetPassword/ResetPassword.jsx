import React from 'react';

const ResetPassword = props => (
  <div className="container reset-password">
  <div className="row">
    <div className="col l8 offset-l2 s12 z-depth-2">
      <h2>Reset Password</h2>
      <form>
        <div className="input-field col s12">
          <input
            className="validate"
            type="password"
            name="password"
            id="password"
            required/>
          <label htmlFor="email">Password</label>
        </div>
        <div className="input-field col s12">
          <input
            className="validate"
            type="password"
            name="password"
            id="password"
            required/>
          <label htmlFor="password">Confirm Password</label>
        </div>
        <div className="row center button">
          <button className="btn-large waves-effect waves-light" type="submit" name="action">Reset Password</button>
        </div>
     </form>
    </div>
  </div>
</div>
);

export default ResetPassword;
