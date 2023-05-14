const express = require('express');
const dbConnect= require('./Database/index');
const router = require('./Routes/auth');
const app = express();
const{PORT}=require('./Config');


app.use(express.json());
app.use(router);

dbConnect();


app.listen(PORT,console.log(`our app is running on port :${PORT}` ));
