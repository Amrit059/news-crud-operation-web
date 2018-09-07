const news=require('../models/news');


getBycatagory=(req, res, next) => {
    let cat=req.params.catagories;
    news.find({"catagories":cat}).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{ 
            console.log("Error is ", error)   
        }
    )
}
module.exports={getBycatagory}