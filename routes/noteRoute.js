var dataBase = require("../db/db.json");
var htmlFile = require("../public/index.html")

module.exports = function(app) {
    app.get("/notes", function(req, res) {
    res.json(dataBase)
    });



    app.post("/notes", function(req, res)

};