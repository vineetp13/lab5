var data = require("../data.json");

exports.addFriend = function(req, res) {
// Your code goes here
    res.render('add');
    //console.log(req)
    console.log(req.query.name, req.query.description);
    var imageURL2 = "www.google.com/1.jpg";
    var newdata = {
        "name":req.query.name,
        "description": req.query.description,
        "imageURL": imageURL2
    }
    console.log(newdata);
    data["friends"].push(newdata);
    //res.render(alert ("friend added"));
}
