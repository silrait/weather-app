const yargs = require('yargs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

yargs.version('0.0.1')

yargs.command({
    command: 'weather',
    describe: 'Show the weather conditions for the given location',
    builder: {
        location: {
            describe: 'Location of the forecast',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        geocode(argv.location, (error, data) => {
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
    }
})

yargs.parse()