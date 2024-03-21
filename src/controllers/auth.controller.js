const authModel = require("../models/auth.model");
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../configs/env.config");

module.exports={
    register:async(req, res)=>{
        try{
            const{email,password}=req.body;
            const checkUser = await authModel.findByEmail({email})
            if(checkUser.length>0){
                return res.status(400).json({
                    message:"email is already registerd"
                })
            }
            console.log(checkUser);
            const hash =await argon2.hash(password)
            await authModel.saveUser({email,password:hash})
            return res.status(201).json({
                message:"success register",
            })
        }
        catch(error){
            console.log(error);
            console.log("🚀 ~ register:async ~ error:", error)
            return res.status(500).json(error)
        }
    },
    
    login:async(req,res)=>{
        try{
            //check email
            const{email,password}=req.body;
            const checkemail = await authModel.findByEmail({email})
            //if email gaada, res 400, email belum terdaftar
            if(checkemail.length<=0){
                return res.status(400).json({
                    message:"email not registerd"
                })
            }
            const userData =checkemail[0]
            //verify password
            const checkPass = await argon2.verify(userData.password, password)

            //jika passwd false return res 401
            if(!checkPass){
                return res.status(401).json({
                    message:"bad credencial"
                })
            }
            const token =jwt.sign({email:userData.email},JWT_SECRET)

            return res.status(200).json({
                message:"success login",
                token
            })

        }
        catch(error){
            console.log(error);
            console.log("🚀 ~ register:async ~ error:", error)
            return res.status(500).json(error)
        }
    }
}