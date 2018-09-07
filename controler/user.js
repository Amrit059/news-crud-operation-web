var User = require("../models/user")
const jwt= require('jsonwebtoken')

getuser=(req, res, next) => {
    User.find().then(
        (data)=>{
            res.send(data)
        }
    ).catch(
        (error)=>{
            console.log("Error is ", error)
            throw new CustomError("Error while fetching all dog", 500)
        }
    )
}

createUser = (req,res) => {
    let userData= req.body 
    let user = new User(userData)  
    user.save((error,registerUser) => {
        if (error){
            console.log(error)
        } else {
            let payload={subject:registerUser._id}
            let token =jwt.sign(payload,'Skey')
            res.status(200).send({token});
        }
    })
}
loginUser=(req, res, next ) => {
    let userData = req.body
    User.findOne({email:userData.email},(error,user) =>{
        if (error) {
            console.log(error)
        } else{
            if (!user){
                res.status(401).send('Invalid Email');
            } else
            if (user.password !== userData.password){
                res.status(401).send('Invalid Password')
            } else{
                let payload={subject:user._id}
            let token =jwt.sign(payload,'Skey')
                res.status(200).send({token})
            }
        }
    })
 
}
module.exports={createUser,
                getuser,
                loginUser}