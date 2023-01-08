const express = require("express");
const http = require("http");
const path = require("path");
const nunjucks = require("nunjucks");
const app = require("../WebDev Task Backend/app");

const env = nunjucks.configure(
    {
        express: app
    }
)