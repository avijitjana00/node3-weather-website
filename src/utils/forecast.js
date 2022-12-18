const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=0affe163566d8b13d1420cd1cb453100&query='+ latitude +','+longitude
    request({url,json:true},(error,{body}) =>{
        if(error){
            callback('unable to connect server',undefined)
        }else if('unable to find location.Try another search',undefined){

        }else{
            callback(undefined,body.current.temperature)
        }
    })

}

module.exports = forecast