const express = require('express')
const router = require("./src/routes")
const app = express()
const port = 3000

app.use(express.json())
app.use(router)



app.listen(port, ()=>{
    console.log(`application running on port: ${port}`);
})
