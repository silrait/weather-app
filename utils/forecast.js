const request = require('request')

const forecast = (latitude, longitude, callback) => {    
    const urlDarkSky = `https://api.darksky.net/forecast/760e6309c79ea439e20ba205eca00796/${latitude},${longitude}?units=si`
    
    request({ url: urlDarkSky, json: true }, (error, response) => {    
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else{ 
            const summary = response.body.daily.data[0].summary
            const temperature = response.body.currently.temperature
            const precipProbability =  response.body.currently.precipProbability
            callback(undefined, `${summary} It is ${temperature} degrees out. There is a ${precipProbability}% of rain today.`)
        }
    })
}

module.exports = forecast