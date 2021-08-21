const asynchHandler = require('express-async-handler');
const express = require('express');
const User = require('../models/User');

const usersRoute = express.Router();

//Register
usersRoute.post(
  '/register', 
asynHandler(async (req, res) => {
   const { name, email, password } = req.body;

   const userExits = await User.findOne({ email: email });
   if (userExits) {
     throw new Error('User Exist');
   }
   const userCreated = await User.create({ email, name, password });
   res.send(userCreated);
  }) 
);

//Login
usersRoute.post(
  '/login', 
  asynHandler(async (req, res) => {
  const {email, password } = req.body;

  const user = await User.findOne({ email });

if(user){
  res.send(user)
}else {
  res.send('User not found');
}
})
);

//update user
usersRoute.put('/update', (req, res) => {
  res.send('Update Route');
});

//Delete user
usersRoute.delete('/:id', (req, res) => {
  res.send('Delete route');
});

//fetch users
usersRoute.get('/', (req, res) => {
  res.send('Fetch users');
});

module.exports = usersRoute;