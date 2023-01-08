const express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("register.njk",{
        pagetitle: "Register User"
    });
})

router.post("/", function(req, res, next){
    var username = req.body.username;
    var passwd = req.body.passwd;
    var confrm_passwd = req.body.confrm_passwd;
    var email = req.body.email;
    console.log(username, passwd, confrm_passwd, email);
})