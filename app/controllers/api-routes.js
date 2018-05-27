var path = require('path');
var userData = require ('../models/user');


module.exports = function (app) {

    app.get('/api/users', function(req,res) {
        res.json(userData);
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