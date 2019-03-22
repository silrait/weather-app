request = require('request')


const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lscmFpdCIsImEiOiJjanRrZ2VhamIwY2dhNDN1b29icG9vOW5jIn0.ZX-A0pvA69wVALW3-Qtx1w&limit=1'
request({url: urlMapBox, json: true}, (error, response) => {       
    var bolo = 'cenoura'
    if(error){
        console.log('Unable to connect to Geocoding service')
    }else if(response.body.message){
        console.log('Unable to find location');        
    } else {
        console.log("Latitude: " + response.body.features[0].center[1] + ", Longitude: " + response.body.features[0].center[0] )
    }    
})

const urlDarkSky = 'https://api.darksky.net/forecast/760e6309c79ea439e20ba205eca00796/37.8267,-122.4233?units=si&lang=pt'
request({ url: urlDarkSky, json: true }, (error, response) => {    
    if(error){
        console.log('Unable to connect to weather service');        
    }else if(response.body.error) {
        console.log('Unable to find location');        
    } else{ 
        console.log(response.body.daily.data[0].summary + " Is is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")    
    }
})
