const mongoose = require('mongoose');

const BikeSchema = mongoose.Schema({
    name: {
        type: String
    },
    imageurl: {
        type: String
    },

    releseDate: {
        type: String
    },
    synopsis: {
        type: String
    }

});

const Bike = mongoose.model('hold', BikeSchema);
const Top = mongoose.model('top', BikeSchema);
const Sci = mongoose.model('sci', BikeSchema);
const Sport = mongoose.model('sport', BikeSchema);
const Motor = mongoose.model('motor', BikeSchema);
const Tec = mongoose.model('tec', BikeSchema);


module.exports = { Bike, Top, Sci, Sport, Motor, Tec };


