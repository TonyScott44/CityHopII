var path = require('path');
var cityData = require ('../data/api-CityHop');


module.exports = function (app) {

    app.get('/api', function(req,res) {
        res.json(cityData);
    })

    // app.get('/api/waitlist', function(req,res) {
    //     res.json(waitingListData);
    // })
    //
    // app.post('/api/tables', function (req, res) {
    //     if(tableData.length < 5) {
    //         tableData.push(req.body);
    //         res.json(true);
    //     } else {
    //         waitingListData.push(req.body);
    //         res.json(false);
    //     }
    // })
    //
    // app.post('/api/clear', function(){
    //     tableData = [];
    //     waitingListData = [];
    // })
};