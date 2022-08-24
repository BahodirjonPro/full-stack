const express = require('express');
const route = express.Router()
const {connectModel,connectNews} = require('../db/db')

    route.get('/',async (req,res)=>{
        const get = await connectNews.find({})
        res.send(get)
    })
    // post
    route.post('/',async (req,res)=>{
        const newBlog = await connectNews.insertMany({
            title:req.body.title,
            blog:req.body.blog,
            imgurl:req.body.imgurl,
            data:req.body.data
        })
        res.send(newBlog)
    })


module.exports = route;