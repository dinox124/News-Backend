const express = require('express'); //
const app = express(); //
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(cors());


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

const { Bike, Top, Tec, Sci, Sport, Motor } = require('./models/bike');
//const { Top } = require('./models/bike');
//const { Tec } = require('./models/bike');
//const { Sci } = require('./models/bike');
//const { Sport } = require('./models/bike');
//const { Motor } = require('./models/bike');

app.get('/', (req, res) => {
    res.json({
        message: "Success"
    })
});

app.get('/get-all-bikes', (req, res) => {
    Bike.find()
        .select({ imageurl: 1 })
        .then((tesla) => {
            res.json(tesla);
        }, (err) => {
            console.log(err);
        });
});

app.get('/top-news', (req, res) => {
    Top.find()
        .select({ imageurl: 1, name: 1, releseDate: 1 })
        .then((tops) => {
            res.json(tops);
        }, (err) => {
            console.log(err);
        });
});

app.get('/top-news-id/:id', (req, res) => {
    Top.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});


app.get('/tec-news', (req, res) => {
    Tec.find()
        .select({ imageurl: 1, name: 1, releseDate: 1 })
        .then((tecs) => {
            res.json(tecs);
        }, (err) => {
            console.log(err);
        });
});

app.get('/tec-news-id/:id', (req, res) => {
    Tec.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});


app.get('/sci-news', (req, res) => {
    Sci.find()
        .select({ imageurl: 1, name: 1, releseDate: 1 })
        .then((scis) => {
            res.json(scis);
        }, (err) => {
            console.log(err);
        });
});

app.get('/sci-news-id/:id', (req, res) => {
    Sci.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});



app.get('/sport-news', (req, res) => {
    Sport.find()
        .select({ imageurl: 1, name: 1, releseDate: 1 })
        .then((sports) => {
            res.json(sports);
        }, (err) => {
            console.log(err);
        });
});

app.get('/sports-news-id/:id', (req, res) => {
    Sport.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});



app.get('/motor-news', (req, res) => {
    Motor.find()
        .select({ imageurl: 1, name: 1, releseDate: 1 })
        .then((motors) => {
            res.json(motors);
        }, (err) => {
            console.log(err);
        });
});

app.get('/motor-news-id/:id', (req, res) => {
    Motor.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});

app.listen(app.get('port'));