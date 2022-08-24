const express = require('express')
const app = express()
const dotenv = require('dotenv')
const router = require('./routes/youtube')
const route = require('./routes/news')

const {connectDb,connectModel} = require('./db/db')


dotenv.config('./.env')
// uses
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/youtube',router)
app.use('/api/news',route)
// db
connectDb()
// listen
const PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log(`Server has been started on ${PORT}`);
})