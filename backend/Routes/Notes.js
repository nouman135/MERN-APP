const express = require('express');
const router2 = express.Router();


// we have to made all our routes in this file
//test
router2.get('/notes',(req,res)=>res.json({message:`hi i am notes`}));


// user 
router2.post('/notes', (req, res) => {
    res.json({ message: 'json notes response' });
  });
  // sign up 
// sign in
// logout 
// refresh 

//blog 
// crud operations
// create, read, update , delete
// read all and read by specific id


// comment 
// create and all the above crud operations 

module.exports = router2;