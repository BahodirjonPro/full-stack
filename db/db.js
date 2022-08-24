const mongoose = require('mongoose')

async function connectDb(){
    try {
        console.log('mongodbga ulandi');
          mongoose.connect('mongodb+srv://bahodirjon:bahodirjon20050301@cluster0.wxylnnm.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true
        })
    } catch (err) {
        if(err)throw err;
    }
}
const youtubeSchema ={
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
}
const newsSchema = {
    title:{
        type:String,
        required:true 
    },
    imgurl:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    }
}
const connectModel = mongoose.model('youtubes',youtubeSchema)
const connectNews = mongoose.model('news',newsSchema)
module.exports ={
    connectDb,
    connectModel,
    connectNews
}