import express from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'


const authmiddleware = express.Router()


authmiddleware.use((req, res, next) =>{
    // localStorage.getItem(token)
    // localStorage.getItem(user)
    // console.log(token,user)
    // next();

    const token = req.header('Authorization');  //frontend se aaya bo token
    if(!token) return res.status(401).json({message:'No Token'})
    console.log(token)

    //compare the token------------
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) return res.status(403).json({message:"Token is Invalid"})
        req.user = user;
        next();
    })

    // setTimeout(()=> {
    //     next()
    // },5000)
})

export default authmiddleware;