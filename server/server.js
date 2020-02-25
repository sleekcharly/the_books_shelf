// server dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// require environment config file
const config = require('./config/config').get(process.env.NODE_ENV)

// express app initialization
const app = express();

/* routers */
//user routes
const user = require('./routes/user');
const books = require('./routes/book')

// connect to database
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// application middlewares
app.use(bodyParser.json()); // middleware for parsing json files
app.use(cookieParser());
app.use('/api/users', user); // middleware for user routes
app.use('/api/books', books); // middleware for book routes


// create application port on development
const port = process.env.Port || 3001;

// listen for connection
app.listen(port, ()=> {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});