require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('Hello World');
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json({
        persona: body
    });
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto:', process.env.PORT);
})