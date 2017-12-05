import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { User } from '../models';

/**
 * This class handles password resetPassword
 * @class resetPassword
 */
class ResetPassword {

  /**
   * This method handles sending email to a registered user to reset password
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} promise
   * @memberof resetPassword
   */
  static forgotPassword(request, response) {
    User.findOne({
      where: {
        email: request.body.email.trim()
      }
    })
    .then((userFound) => {
      if (!userFound) {
        return response.status(404).json({
          message: 'Email doesn\'t exist'
        });
      }
      const email = request.body.email;
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY_TIME
      });
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        secure: false,
        auth: {
          user: 'noreply.postit.appl@gmail.com',
          pass: process.env.PASSWORD
        }
      });
      const mailOptions = {
        from: 'PostIt',
        to: email,
        subject: 'reset Password',
        html: `<div><h3>Hi,</h3>
        <p>You are receiving this mail because you 
        (or someone else) requested a password reset 
        for your PostIt account</p>
        <p>To change your PostIt password, click 
        <a
        href="${request.headers.origin}/resetPassword?tokn=${token}">
        here</a>
        or copy and paste the link below into your browser</p><br/>
        <a
        href="${request.headers.origin}/resetPassword?tokn=${token}">
        <p>${request.headers.origin}/resetPassword?tokn=${token}</p>
        </a><br/>
        <p>This link will expire in 24 hours, so be sure to use 
        it right away.</p>
        <p>If you did not request this, please ignore this email
        and your password will remain unchanged</p>
        <p>The PostIt Team</p></div>`
      };
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return response.status(500).json({
            message: 'Mail not sent'
          });
        }
        return response.status(200).json({
          message: 'Please check your mail for the reset link'
        });
      });
    })
    .catch(() => response.status(500)
    .json({ error: 'Internal server error' }));
  }

  /**
   * This method handles resetting user password
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} promise
   *
   * @memberof resetPassword
   */
  static resetPassword(request, response) {
    const token = request.query.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return response.status(401).json({
            message: 'This link has expired or is invalid'
          });
        }
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(request.body.password, salt);

        User.update({ password: passwordHash }, {
          where: { email: decoded.email }
        })
        .then(() => response.status(200)
        .json({ message: 'Password reset successful' }))
        .catch(() => response.status(500)
        .json({ error: 'Internal server error' }));
      });
    } else {
      return response.status(401).json({
        message: 'Unauthorized'
      });
    }
  }
}

export default ResetPassword;
