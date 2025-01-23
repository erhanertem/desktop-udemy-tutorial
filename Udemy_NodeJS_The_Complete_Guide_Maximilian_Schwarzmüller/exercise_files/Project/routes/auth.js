const express = require('express');

const authController = require('../controllers/auth');

const resetPasswordLimiter = require('../middleware/rateLimit');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

router.get('/reset', authController.getReset);
router.post('/reset', authController.postReset);

router.get('/reset/:token', resetPasswordLimiter, authController.getNewPassword);
router.post('/new-password', authController.postNewPassword);

router.post('/logout', authController.postLogout);

module.exports = router;
