var chores = require("../models/chores.js");

module.exports = (app) => {


    app.get("/", (req, res) => {
        //console.log("***** Inside routes.js *******");  
        chores.all(function(data) {
            var hbsObject = {
                chores: data
            };
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