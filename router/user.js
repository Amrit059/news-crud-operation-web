const express = require('express');
const router = express.Router();
const user=require('../controler/user')

router.get("/",user.getuser)
router.post("/login", user.loginUser);
router.post("/register",user.createUser);

module.exports=router;