const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler')
const usersRoute = require('./routes/usersRoute');
dotenv.config()
require('./config/dbConnect')();
// EMMMA
const app = express();

//Passing body data
app.use(express.json());

//Routes
app.use('/api/users', usersRoute)

console.log(process.env.MY_NAME);
//Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});

// book
// keep