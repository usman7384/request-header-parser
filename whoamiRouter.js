var express = require('express');

const Router = require("express").Router();


Router.get("/api/whoami", (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
    });
});


module.exports = Router;