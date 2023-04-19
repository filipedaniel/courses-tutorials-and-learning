const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.get('/', (req, res, next) => {
  res.send("Hello from server!");
})

router.post('/register', (req, res, next) => {
  const userData = req.body;
  const user = new User(userData);
  user.save((err, registerUser) => {
    if(err) {
      console.log(err);
      return res.status(500).jsonp("Error!")
    } else {
      res.status(200).jsonp({
        data: registerUser
      });
    }

  })

});

router.post('/login', (req, res, next) => {
  const userData = req.body;
  const user = new User(userData);

  User.findOne({ email: userData.email }, (err, loginUser) => {
    if(err || !loginUser) {
      console.log(err);
      return res.status(500).jsonp("Error!")
    } else {
      res.status(200).jsonp({
        data: loginUser
      });
    }
  })

});

router.get('/events', (req, res, next) => {
  res.status(200).jsonp({
    message: "Access events route!"
  })
})

router.get('/special', (req, res, next) => {
  res.status(200).jsonp({
    message: "Access special route!"
  })
})

module.exports = router;