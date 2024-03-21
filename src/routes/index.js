const express = require('express')
const router = express.Router()
const bookRouter = require("./book.router")
const authRouter = require('./auth.router')


//router book
router.use("/books", bookRouter)

//router auth
router.use("/auth",authRouter);

router.get('/:id', (req,res)=>{
    // res.send("hello world!")
    //query params : example localhost:3000/books(?)(title)=(matahati)
    const name = req.query.nama
    const id = req.params.id
    res.send(`halo ${name} idnya ${id}`)
    //path variabel :localhost:3000/books/id
    
    //body request :{title:'judul', author:'pengarang'} => json

})
router.post("/user",(req,res)=>{
    res.status = 200
    const {firstname,lastname,username} =req.body
    return res.json({firstname,lastname,username})
    // return res.json({
    //     status: res.status,
    //     message :"get user",
    //     data:{
    //         username :"dit",
    //         password:"pass"
    //     },
    // })
})
module.exports = router;