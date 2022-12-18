const path = require('path')            //It's a core module no need to install
const express = require('express')
const app = express()
const pathdirectory = (path.join(__dirname,'../public'))
app.use(express.static(pathdirectory))


app.get('/',(req,res) =>{
    res.send('<h1>welcome to express</h1>')
})

app.get('/title',(req,res) =>{
    res.send('<b>Hello, Avijit</b>')
})

app.get('/home',(req,res) =>{
    res.send({
        name:'avijit',
        title:'jana'
    })
})

app.get('/page',(req,res) =>{
    res.send([{
        name:'avijit',
        title:'jana'
    },{
        add:'rajsahar',
        po:'patanda'
    }])
})

app.listen(4000, ()=>{
    console.log('running on port 4000')
})

