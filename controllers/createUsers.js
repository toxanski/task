const User = require('../models/user');

module.exports.home = (req, res) => {
  res.send('Home');
}

module.exports.sendUser = (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.status(200).json({status: 'OK'});
    })
    .catch(err => {
      res.status(401).json({status: 'BAD'});
      console.log(err);
    });
}