const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

exports.protect = catchAsync( async (req , res , next) => {
   const token = req.cookies.token;
   if(!token){
      return next(new AppError('unAuthorized Access, please login first' , 400));
   }
   const decoded = jwt.verify(token , process.env.JWT_SECRET);
   const { _id } = decoded;
   
   const user = await User.findById(_id , '-password -__v');
   if(!user){
      return next(new AppError('User not found.' , 404))
   }
   req.user = user;
   next();

})