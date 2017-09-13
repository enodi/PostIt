const bcrypt = require('bcryptjs');


module.export = {

    /** validate plain password against hashed password
     * @param {object} user
     * @param {String} password
     * @return {Boolean} return validity of the password
     */
  validatePassword: (user, password) => {
    return bcrypt.compareSync(password, user.password);
  },

  /** validate plain password against hashed password
     * @param {String} password
     * @return {Boolean} return validity of the password
     */
  hashedPassword: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8))

};
