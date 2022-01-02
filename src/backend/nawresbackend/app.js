const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
db = require('../nawresbackend/config/db.config');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



// Require user routes
const userRoutes = require('../nawresbackend/Routes/user.routes')
// using as middleware
app.use('/', userRoutes)


app.listen('3001', () => {
    console.log('server started on 3001');
});
