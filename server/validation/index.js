const rules = {
  username: 'required|min:4|string',
  email: 'required|email',
  password: 'required|string',
  fullname: 'required|string'
};

module.exports = rules;
