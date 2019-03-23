const request = require('request')

const forecast = (latitude, longitude, callback) => {    
    const url = `https://api.darksky.net/forecast/760e6309c79ea439e20ba205eca00796/${latitude},${longitude}?units=si`
    
    request({ url, json: true }, (error, {body}) => {    
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error) {
            callback('Unable to find location', undefined)
        } else{
            const summary = body.daily.data[0].summary
            const {temperature, precipProbability} = body.currently
            callback(undefined, `${summary} It is ${temperature} degrees out. There is a ${precipProbability}% of rain today.`)
        }
    })
}

module.exports = forecast