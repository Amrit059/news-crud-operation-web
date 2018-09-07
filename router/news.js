const express = require('express');
const router = express.Router();
const news=require('../controler/news');

router.get('/',news.getnews);
router.post('/',news.createnews);
router.get('/:id',news.getById)
router.put('/:id',news.putnews);
router.delete('/:id',news.removenews);


module.exports=router;