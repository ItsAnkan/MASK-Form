const express = require("express");
const path = require("path");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render('login.njk',{
        pagetitle: "Login"
    });
})

router.post("/", function(req, res, next){
    var username = req.body.username;
    var passwd = req.body.passwd;
    console.log(username, passwd);
    if(username == "" | passwd == ""){
        res.render('login.njk',{
            pagetitle: "Login",
            username: username,
            passwd: passwd
        });
        return;
    }
    else{
        res.render('login.njk',{
            pagetitle: "Login"
        });
        return;
    }
})

module.exports = router;