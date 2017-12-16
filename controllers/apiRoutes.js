var chores = require("../models/chores.js");


module.exports = (app) => {

	app.get("/api/testing", (req, res) => {
    res.render('testing');
  });
	
	
	
	app.post("/api/addtask", (req, res) => {
		console.log(req.body);
				
	
	
	
	});
  
}