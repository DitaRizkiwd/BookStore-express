const db = require("../configs/db.config")

//query unstuk crud


module.exports={
    //read/retrieve data
    findAll:()=>{
        return new Promise((resolve, reject)=>{
            db.query(`SELECT * FROM books`,(err,rows,fields)=>{
            if(err) reject(err);
            console.log("🚀 ~ db.query ~ rows:", rows)
            resolve(rows)
            })
            
        })
    },

    saveBook:({title,desc,author})=> {
        return new Promise((resolve, reject)=>{
            db.query(`INSERT into books (title,description,author)
            values(?,?,?)`,[title,desc,author], (err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows)
            })
        })
    }
    
};
