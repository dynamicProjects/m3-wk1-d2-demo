var express = require('express');
var app = express();

app.get('/hello', function(req, res){
    res.send('Hello world!');
    })

    app.post('/hello', function(req, res){
        res.send("You just call the post method at '/hello'!\n");
        })

app.listen(3000);


