var path = require('path');
var cityData = require ('../data/api-CityHop');
var db = require('../models');

module.exports = function (app) {

    app.get('/api', function(req,res) {
        res.json(cityData);
    })


      app.get("/api/Cityhopuser", function(req, res) {
          console.log(req.body);
           db.Cityhopuser.findAll({}).then(function(dbCityhopuser) {
               console.log(dbCityhopuser);
          // We have access to the Cityhopusers as an argument inside of the callback function
          res.json(dbCityhopuser);
        });
      });
    
      // POST route for saving a new user
      app.post("/api/Cityhopuser", function(req, res) {
        console.log(req.body);
     
        db.Cityhopuser.create({
            email: req.body.email,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            CC: req.body.CC,
            expDate: req.body.expDate,
            secCode: req.body.secCode,
            address: req.body.address,
            hops: req.body.hops,
            //orderDate: req.body.created_at,
            orderTotal: req.body.orderTotal
        }).then(function(dbCityhopuser) {
          // We have access to the new Cityhopuser as an argument inside of the callback function
          res.json(dbCityhopuser);
        });
      });
    
      // DELETE route for deleting Cityhopusers. We can get the id of the Cityhopuser we want to delete from
      // req.params.id
      app.delete("/api/Cityhopuser/:id", function(req, res) {
    
      });
    
      // PUT route for updating Cityhopusers. We can get the updated Cityhopuser from req.body
      app.put("/api/Cityhopuser", function(req, res) {
    
      });


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