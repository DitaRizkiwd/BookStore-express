const db = require("../configs/db.config")

module.exports={
    saveUser: ({email,password})=>{
        return new Promise((resolve, reject)=>{
            db.query("INSERT INTO `users`(`email`, `password`) VALUES (?,?);",
            [email,password],(err,rows,fields)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })
    },
    findByEmail:({email})=>{
        return new Promise((resolve, reject)=>{
            db.query(`select*from users where email = ?`,[email],(err,rows,field)=>{
                if(err) reject(err);
                console.log("🚀 ~ db.query ~ rows:", rows)
                resolve(rows);
            })
               
        })
    }
}