const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const cors=require('cors');
const config = require('config');


const app=express();
app.use(cors());
const mongoose = require("./config/mongo.config");
let hostconfig = config.get('appConfig.hostConfig');
const PORT = hostconfig.port || 3000;

const index = require("./router/index")

app.use(bodyParser.json());

app.use('/index',index)

app.get('',(req,res,next)=>{
    res.send("server is connected");
    })


    app.listen(PORT, () => {
        console.log('Server started on port:'+PORT);
    });