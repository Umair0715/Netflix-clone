const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
   
   email : {
      type : String , 
      required : true ,
      unique : true
   } ,
   password : {
      type : String , 
      required : true
   } ,
   role : {
      type : String , 
      default : 'user'
   } ,
   isSubscribed : {
      type : Boolean ,
      default : false 
   }

} , { timestamps : true } );


userSchema.pre('save' , async function(next) {
   if(!this.isModified('password')){
      return next();
   }
   this.password = await bcrypt.hash(this.password , 10);
   next();
});

userSchema.methods.matchPassword = async function(givenPassword){
   return await bcrypt.compare(givenPassword , this.password);
}

const User = mongoose.model('User' , userSchema);
module.exports = User ;