var path = require('path');
var db = require('../models');

module.exports = function (app) {

    app.get('/api', function(req,res) {
        res.json(userData);
    })

    app.get('/api/allusers', function(req, res) {

        db.Cityhopuser.findAll({}).then(function(results) {
            res.json(results);
        });
    
      });

      app.get("/api/Cityhopuser", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Cityhopuser.findAll({}).then(function(dbCityhopuser) {
          // We have access to the Cityhopusers as an argument inside of the callback function
          res.json(dbCityhopuser);
        });
      });
    
      // POST route for saving a new user
      app.post("/api/Cityhopuser", function(req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Cityhopuser.create({
          text: req.body.text,
          complete: req.body.complete
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


};