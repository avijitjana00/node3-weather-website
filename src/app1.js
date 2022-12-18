
const express = require('express')

const app = express()

app.get('',(req,res) =>{
    res.send('welcome to express')
})

app.get('/help',(req,res) =>{
    res.send('welcome to help page')
})

app.get('/title',(req,res) =>{
    res.send('welcome to title page')
})

app.get('/home',(req,res) =>{
    res.send('welcome to home page')
})
app.listen(3000,() =>{
    console.log('server is run on port 3000')
})