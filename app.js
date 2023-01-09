const express = require("express");
const http = require("http");
const path = require("path");
const nunjucks = require("nunjucks");

var app = express();

var loginRouter = require("./src/login");
var registerRouter = require("./src/register");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'templates'));
app.set("view engine", "njk");

app.use("/login", loginRouter);
app.use("/register", registerRouter);

const env = nunjucks.configure(path.join(__dirname, '../templates'),
    {
        autoescape: true,
        express: app
    }
)

var server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server at 3000")
})