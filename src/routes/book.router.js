const express = require('express')
const bookController = require("../controllers/book.controller")
const authMiddleware = require('../middleware/auth.middleware')
const bookRouter = express.Router()

//localhost:3000/
bookRouter.get('/',bookController.getBooks)
//endpoint with token create, update, delete
bookRouter.post('/', authMiddleware.tokenMiddleware, bookController.createbook)
module.exports=bookRouter


