const express = require('express');
const router = express.Router();
const cat=require('../controler/catagories');

router.get('/:catagories',cat.getBycatagory);

module.exports=router;