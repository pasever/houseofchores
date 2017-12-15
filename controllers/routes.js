var chores = require("../models/chores.js");

module.exports = (app) => {


    app.get("/", (req, res) => {
        //console.log("***** Inside routes.js *******");  
        chores.all(function(data) {
            var hbsObject = {
                chores: data
            };
            
            //distinct(hbsObject);
            console.log("***** Inside routes.js *******");
            console.log(hbsObject);
            res.render('index', hbsObject);
        });

        chores.choreDays(function(data) {
            var hbsObject = {
                chores: data
            };
            // console.log("***** Inside routes.js *******");
            // console.log(hbsObject);
            //res.send("Sup");
        });

        chores.alltasks(function(data) {
            var hbsObject = {
                chores: data
            };
            // console.log("***** Inside routes.js *******");
            // console.log(hbsObject);
        });

        //}

        // app.get("/", (req, res) => {
        //     chores.all(function(data) {
        //         var hbsObject = {
        //             chores: data
        //         };
        //         console.log("***** Inside routes.js *******");
        //         console.log(hbsObject);
        //         res.render("index", hbsObject);
        //     });
    });
}

function distinct(obj){
  
  var table = obj.map(function(chore, i, arr){
    return chore.user_id; 
    console.log(chore.user_id);
  }).filter((user_id, i, arr) => arr.indexOf(user_id) === i);      
}