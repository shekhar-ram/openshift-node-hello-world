const express = require('express');

const app = express();

const port = 8089;

app.listen(port, function(err) {
    if(err) {
        console.log('Error while starting server...');
    } else {
        console.log(`App Started on port ${port}`);
    }
});

app.get('/', function(req, res) {
    res.send('Hello from OpenShift, I am version 2.0');
});