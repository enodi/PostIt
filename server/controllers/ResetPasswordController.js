import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models';

/**
 * This class handles password reset
 * @class ResetPassword
 */
class ResetPassword {

  /**
   * This method handles sending email to a registered user to reset password
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} promise
   * @memberof ResetPassword
   */
  static forgotPassword(req, res) {
    if (!req.body.email || req.body.email === ' ') {
      return res.status(400).json({
        message: 'Field cannot be empty'
      });
    }
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((userFound) => {
      if (!userFound) {
        return res.status(404).json({
          message: 'Email doesn\'t exist'
        });
      }
      const email = req.body.email;
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
        subject: 'Reset Password',
        html: `<div><h3>Hi,</h3>
        <p>You are receiving this mail because you (or someone else) requested a password reset for your PostIt account</p>
        <p>To change your PostIt password, click <a href="${req.headers.origin}/resetPassword?tokn=${token}">here</a> or copy and paste the link below into your browser</p><br/>
        <a href="${req.headers.origin}/resetPassword?tokn=${token}"><p>${req.headers.origin}/resetPassword?tokn=${token}</p></a><br/>
        <p>This link will expire in 24 hours, so be sure to use it right away.</p>
        <p>If you did not request this, please ignore this email and your password will remain unchanged</p>
        <p>The PostIt Team</p></div>`
      };
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return res.status(500).json({
            message: 'Mail not sent'
          });
        }
        return res.status(200).json({
          message: 'Please check your mail for the reset link'
        });
      });
    })
    .catch(error => error.response.data);
  }

  /**
   * This method handles resetting user password
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} promise
   *
   * @memberof ResetPassword
   */
  static resetPassword(req, res) {
    const token = req.query.tokn;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: 'This link has expired or is invalid'
          });
        }
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(req.body.password, salt);

        User.update({ password: passwordHash }, {
          where: { email: decoded.email }
        })
        .then(() => res.status(200).json({ message: 'Password reset successful' }))
        .catch(err => res.status(500).json({ error: err }));
      });
    } else {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }
  }
}

export default ResetPassword;
