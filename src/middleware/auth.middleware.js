const jwt =require("jsonwebtoken")
const{JWT_SECRET}=require("../configs/env.config")

module.exports={
    tokenMiddleware:(req, res,next)=>{
        try{
            const {authorization}=req.headers
            console.log("🚀 ~ authorization:", authorization)
            const token =authorization.slice(7)
            jwt.verify(token,JWT_SECRET)
            next()
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                message:"access forbidden"
            })
        }

    }
}