var expressNunjucks = require('express-nunjucks');
var express = require("express");


function mainApp() {
    var serverApp = express();
    serverApp.set('views', __dirname + '/templates');

    var njk = expressNunjucks(serverApp, {
        watch: true,
        noCache: true
    });

    serverApp.get("/", (req, res) => {
        var data = {
            title: "Home page",
            greeting: "Hello, its a me, Mario!",
            browserScript: process.env.BROWSER_REFRESH_URL
        }
        console.log(data);
        res.render('index', data);
    });
    serverApp.get("/artist/:name", (req, res) => {
        
           return res.send(new ArtistLogic().getArtistPageData
           (req.params.name));
        });
        

    
    serverApp.listen(3000, () => {
        console.log("Welcome to NodeJS, the server has started");
        if (process.send) {
            process.send('online');
        }
    })
}

mainApp();