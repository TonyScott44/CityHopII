
//---------------------------------------------------------------------------//
// Require Body Parser                                                       //
// **** Allows us to receive our information back in JSON                    //
//      to make the data easy to manipulate.                                 //
var bodyParser = require('body-parser');                                     //
//---------------------------------------------------------------------------//
// Require Express                                                           //
// ** Simplifies routing using node.js                                       //
var express = require('express');                                            //
//---------------------------------------------------------------------------//
// Path (built into node/no need to install)                                 //
// Allows url CRUD                                                           //
var path = require('path');      

var db = require('./app/models');
//
//---------------------------------------------------------------------------//
// Make the Express function easy to call                                    //
var app = express();                                                         //




//---------------------------------------------------------------------------//
// Specify Port                                                              //
var PORT = process.env.PORT || 9044;                                         //
//---------------------------------------------------------------------------//


//***************************************************************************//
//          ** Body Parser NPM Package Code **                               //
//***************************************************************************//
app.use(bodyParser.urlencoded({ extended: true })) ;                        //
app.use(bodyParser.json());                                                  //
                                                                             //
//---------------------------------------------------------------------------//
//app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.static("public"));

//***************************************************************************//
//             ** Controller/Routing File References **                      //
//***************************************************************************//
require('./app/controllers/api-routes.js')(app);                             //
require('./app/controllers/controller.js')(app);                             //
                    //
//---------------------------------------------------------------------------//
//***************************************************************************//
//             ** Passport/Login File References **                          //
//***************************************************************************//
require('./app/config/login.js')(app);                                       //
                                                                             //
                                                                             //
//---------------------------------------------------------------------------//


//***************************************************************************//
//             **                         **                                 //
//***************************************************************************//
db.sequelize.sync({force: true}).then( function(){
    app.listen(PORT, function(){                                                 //
        console.log("App listening on PORT: " + PORT);                           //
    });  
});
                                                                        //
//---------------------------------------------------------------------------//