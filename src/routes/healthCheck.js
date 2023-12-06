const express = require('express');
const router = express.Router();
const os = require('os');
const packageJson = require('../../package.json');

router.get("/",(_,res)=>{
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
        version: packageJson.version, 
    };

    res.send(healthcheck)
});

module.exports = router;