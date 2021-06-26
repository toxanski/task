const User = require('../models/user');

module.exports.home = async (req, res) => {
  res.end('<h1>Главная</h1>');
}

module.exports.sendUser = async (req, res) => {
  await User.create({
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
  
  // console.log('емаил', req.body.email);
  // console.log('пасс', req.body.password);
  // console.log('User', User);
}