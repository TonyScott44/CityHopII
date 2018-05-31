var path = require('path');
var weatherData = require ('../models/api-weather');


module.exports = function (app) {

    app.get('/api/weather', function(req,res) {
        res.json(cityData);
    })

};