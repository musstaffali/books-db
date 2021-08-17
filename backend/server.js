const express = require('express');
const mongoose = require('mongoose');
const app = express();

//connect DB


//Routes
//Users routes

//Register
app.post('/api/users/register', (req, res)=> {
    res.send('Register route')
});

//Login
app.post('/api/users/login', (req, res) => {
    res.send('login route')
})

//update user
app.put('/api/users/update', (req, res) => {
    res.send('Update Route');
});

//Delete user
app.delete('/api/users/:id', (req, res) => {
    res.send('Delete route');
})


//fetch users
app.get('/api/users', (req, res) => {
    res.send('Fetch users');
});

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});