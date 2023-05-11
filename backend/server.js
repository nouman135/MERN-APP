const express = require('express');
const dbConnect= require('./Database/index');

const app = express();
const{PORT}=require('./Config')

dbConnect();

app.get('/',(req,res)=>res.json({message:`i am learning backend and new things`}));

app.listen(PORT,console.log(`our app is running on port :${PORT}` ));
