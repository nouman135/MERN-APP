const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nouman£ali@malik';

const validation = [
  body('email', 'Email must be valid').isEmail(),
  body('name', 'Minimum name length is 5').isLength({ min: 5 }),
  body('password').isLength({ min: 8 })
];

router.get('/test', validation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Fields must be validated');
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      userName: req.body.userName
    });
    const data ={
      newUser:{
        id:newUser.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken)
    res.json({authToken});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
