const express = require('express');
const router = express.Router()
const {connectModel,connectNews} = require('../db/db')

// youtube router
router.get('/',async (req,res)=>{
    const get = await connectModel.find({})
    res.send(get)
})
// post
router.post('/',async (req,res)=>{
    const newYoutube = await connectModel.insertMany({
        title:req.body.title,
        description:req.body.description,
        url:req.body.url
    })
    res.send(newYoutube)
})

module.exports = router