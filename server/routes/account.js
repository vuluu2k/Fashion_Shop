const express = require('express')
const router=express.Router();
const AccountController = require('../controllers/AccountController')

// Đăng kí tài khoản
router.post('/register',AccountController.registerAccount)
router.post('/login',AccountController.loginAccount)


module.exports = router;