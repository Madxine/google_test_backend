const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
require('colors');
const connectDB = require('./dbinit');
const locationRoute = require('./routes/location');
const userRoute = require("./routes/user");


connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next)=>{console.log(req.path, req.method), next();})

//my routes
app.use('/location', locationRoute);
app.use('/user', userRoute);


app.get('/', (req, res)=>{
res.send('Welcom to my API')
});


app.listen(port, ()=>{
console.log("server is running on 5K")
});
