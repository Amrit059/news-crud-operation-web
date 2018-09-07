const news=require('../models/news');

getnews=(req, res, next) => {
    news.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{ 
            console.log("Error is ", error)
            
        }
    )
}

getById=(req,res,next)=>{  
    b=req.params.id  
    news.findById(b).then(
        (data)=>{
         res.json(data);
        }).catch(
        (error)=>{
            console.log("Error is:",error);
        }

    )
}





createnews=(req,res)=>{
    news.create(req.body,(post)=>{
         res.json(post);
    });
}

putnews=(req,res)=>{
    b=req.params.id
    news.findByIdAndUpdate(b,req.body,(post)=>{
         res.json(post);
    });
}

removenews=(req,res)=>{
    b=req.params.id
    news.findByIdAndRemove(b,req.body,(post)=>{
         res.json(post);
    });
}


module.exports={
            getnews,
            getById,
            createnews,
            removenews,
            putnews
} 