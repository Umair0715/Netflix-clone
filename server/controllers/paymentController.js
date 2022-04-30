const catchAsync = require('./../utils/catchAsync');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.paymentIntent = catchAsync( async (req , res , next) => {
   const paymentIntent = await stripe.paymentIntents.create({
      amount : req.body.amount ,
      currency: "PKR",  
   });
   res.status(200).json({ 
      client_secret : paymentIntent.client_secret
   })
})

exports.getApiKey = catchAsync(async(req , res , next) => {
   return res.status(200).json({ key : process.env.STRIPE_PUBLISH_KEY })
})

