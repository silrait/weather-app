geocode = require('./utils/geocode')
forecast = require('./utils/forecast')

geocode('dionisio cerqueira, brazil', (error, data) => {
    if(error){
        return console.log(error)
    }

    forecast(data.latitute, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)                
        }
        
        console.log(data.location)               
        console.log(forecastData)
    })
})