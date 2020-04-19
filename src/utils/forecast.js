const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/7479da90dba4942a5c91eac773a29f3e/'+latitude+","+longitude
    request({ url, json: true }, (error, { body }) => {

        if(error) {
            callback('Unable to connect to weather service!',undefined)
        }else if(body.error) {
            callback('Unable to find location',undefined)
        }else {
            callback(undefined, body.daily.data[0].summary+" It is currently "+body.currently.temperature+" degrees out. There is "+body.currently.precipProbability+"% chance of rain.\n"+"Today's highest temperature will be "+body.daily.data[0].temperatureHigh+" and Lowest will be "+body.daily.data[0].temperatureLow)            
        }
        
    })
}    

module.exports = forecast