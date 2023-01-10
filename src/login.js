const express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("login",{
        pagetitle: "Login"
    });
})

router.post("/", function(req, res, next){
    var username = req.body.username;
    var passwd = req.body.passwd;
    console.log(username, passwd);
})

module.exports = router;