/** @format */

const express = require('express');
const app = express();

//Routes
//Users routes
app.post('/api/users/register', (req, res)=> {
    res.send('Register route')
});

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});