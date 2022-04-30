const router = require('express').Router();
const { protect } = require('../middlewares/protect');
const userController = require('./../controllers/userController');

router.post('/signup' , userController.signup)
router.post('/signin' , userController.signin)
router.get('/' , protect , userController.userInfo)
router.get('/logout' , protect , userController.logout);
router.route('/:id')
   .put(protect , userController.updateUser);

module.exports = router;