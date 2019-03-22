const request = require('request')

const geocode = (address, callback) => {
    const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1Ijoic2lscmFpdCIsImEiOiJjanRrZ2VhamIwY2dhNDN1b29icG9vOW5jIn0.ZX-A0pvA69wVALW3-Qtx1w&limit=1`
    
    request({url: urlMapBox, json: true}, (error, response) => {       
        if(error){
            callback('Unable to connect to Geocoding service', undefined)
        }else if(response.body.message){
            callback('Unable to find coordinates', undefined);        
        } else {
            callback(undefined, { 
                latitute: response.body.features[0].center[1],                 
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }    
    })
}

module.exports = geocode