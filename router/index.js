const express = require('express');
const router= express.Router();
const userRouter= require('./user');
const newsRouter= require('./news');
const catRouter=require('./catagories');
router.use("/catagories",catRouter)
router.use("/user", userRouter);
router.use("/news", newsRouter);
module.exports=router;