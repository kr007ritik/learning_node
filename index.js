require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World....!')
})

app.get('/message',(req,res)=>{
    res.send('<h1>Message is sending successfully....!</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>These information is about me</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})