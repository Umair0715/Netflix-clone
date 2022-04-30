const router = require('express').Router();
const { protect } = require('../middlewares/protect');
const paymentController = require('./../controllers/paymentController');

router.get('/publish-key' , paymentController.getApiKey);
router.post('/payment-intent' , protect , paymentController.paymentIntent)
module.exports = router;