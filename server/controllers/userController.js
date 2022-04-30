const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

const signToken = (user , status , res) => {
   const token = jwt.sign({ _id : user._id} , process.env.JWT_SECRET , {
      expiresIn : process.env.JWT_EXPIRES_IN
   });

   res.cookie('token', token , {
      expires : new Date(Date.now() + 12 * 60 * 60 * 1000) ,
      path : '/' ,
      httpOnly : true 
   });

   res.status(status).json({
      status : 'success' , 
      user : {
         email : user.email ,
         _id : user._id ,
         isSubscribed : user.isSubscribed
      } 
   })
   
}

exports.signup = catchAsync(async(req , res , next) => {
   const { email , password } = req.body;
   if(!email || !password){
      return next(new AppError('All Fields are required' , 400))
   }
   const userExist = await User.findOne({ email })
   if(userExist){
      return next(new AppError('This email is already taken , try another' , 400))
   }  
   const user = await User.create({ 
      email ,
      password 
   })
   signToken(user , 201 , res);

})



exports.signin = catchAsync(async (req , res , next) => {
   const { email , password } = req.body;
   if(!email || !password){
      return next(new AppError('All Fields are required' , 400))
   }
   const user = await User.findOne({ email });

   if(!user || !(await user.matchPassword(password))){
      return next(new AppError('wrong email or password' , 401))
   }
   signToken(user , 200 , res);
});



exports.userInfo = catchAsync(async (req , res , next) => {
   const user = req.user;
   res.status(200).json({
      status: 'success' ,
      user 
   })
})


// LOGOUT USER
exports.logout = catchAsync(async (req , res , next) => {
   res.cookie('token' , null , {
      expires : new Date(Date.now() + 10 * 1000)
   })
   res.status(200).json({
      status : 'success' ,
      message : 'Logout Successully'
   })
});


// UPDATE USER
exports.updateUser = catchAsync(async (req , res , next) => {
   const user = await User.findById(req.params.id);
   if(!user){
      return next(new AppError('User Does not exist' , 404))
   }
   const updatedUser = await User.findByIdAndUpdate(req.params.id , req.body , {
      new : true ,
      runValidators : true 
   }).select('-password -__v');

   res.status(200).json({
      status : 'success' , 
      user : updatedUser
   })
})