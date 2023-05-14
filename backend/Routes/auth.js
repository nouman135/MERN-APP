const user = require('../models/user');
const express = require('express');
const router = express.Router();


// we have to made all our routes in this file
//test
router.get('/test',(req,res)=>{
  const users= user(req.body);
  users.save();
// res.send(req.body)
});


// user 
// router.get('/test2', (req, res) => {
//     res.json({ message: 'This is a test JSON response' });
//   });
  // sign up 
// sign in


// user 

// logout 
// refresh 

//blog 
// crud operations
// create, read, update , delete
// read all and read by specific id


// comment 
// create and all the above crud operations 

module.exports = router;