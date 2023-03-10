const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const hbs = require('hbs')
const { rmSync } = require('fs')

const app = express()
const port = process.env.PORT || 7000

//Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath= path.join(__dirname,'../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicPath))

app.get('',(req,res) =>{
    res.render('index',{
        title:'weather-app',
        name:'avijit'
    })
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title:'this is all about me',
        name:'Avijit'
    })
})
app.get('/help',(req,res) =>{
    res.render('help',{
        title:'This is help page',
        name:'avijit Jana'
    })
})

app.get('/weather',(req,res) =>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an address!'
        })
    }
    else{
        address = (req.query.search)

        geocode(req.query.address,(error,{latitude,longitude,location} ={}) =>{
            if(error){
                return res.send({error})
            }
            forecast(latitude,longitude,(error,forecastData) =>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast:forecastData,
                    location,
                    address:req.query.address
                })
            })
        })
    }
    // res.send({
    //     forecast:'It is snowing',
    //     location:'philadelphia',
    //     address:req.query.address
    // })
})
app.get('/products',(req,res) =>{
    if(!req.query.search){
        return res.send({
            error:'you must provide a search tearm'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('*',(req,res) =>{
    res.render('404',{
        title:'404',
        name:'avijit',
        errorMessege:'page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})