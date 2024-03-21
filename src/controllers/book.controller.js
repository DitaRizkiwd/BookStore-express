const bookModel = require("../models/book.model")

module.exports={
    getBooks:async(req,res)=>{
        try{
            const data = await bookModel.findAll();
            return res.status(200).json({
                message:"success get book!",
                data,
            })
        }catch(error){
            console.log("🚀 ~ getBooks:async ~ error:", error)
            return res.status(500).json(error)
        }
    },

    createbook:async(req,res)=>{
        try{
            const{title,desc,author} = req.body;
            await bookModel.saveBook({
                title: title, //perlu deskripsi kalo namanya berbeda
                desc:desc,
                author:author
            })
            const data = await bookModel.findAll()
            return res.status(201).json({
                message:"succes saved book",
                data
                
            })
        }
        catch(error){
            console.log("🚀 ~ createBooks:async ~ error:", error)
            return res.status(500).json(error)
        }
    }
}