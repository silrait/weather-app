const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1Ijoic2lscmFpdCIsImEiOiJjanRrZ2VhamIwY2dhNDN1b29icG9vOW5jIn0.ZX-A0pvA69wVALW3-Qtx1w&limit=1`
    
    request({url, json: true}, (error, {body}) => {       
        if(error){
            callback('Unable to connect to Geocoding service', undefined)
        }else if(body.message){
            callback('Unable to find coordinates', undefined);        
        } else {
            callback(undefined, { 
                latitute: body.features[0].center[1],                 
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }    
    })
}

module.exports = geocode