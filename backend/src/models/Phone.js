const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    brand: String,
    name: { type: String, required: true },
    imei: String,
    color: String,
    capacity: {
        type: Number,
        required: true,
        validate: {
            validator: (v) => v > 0 && v % 2 === 0,
            message: props => `${props.value} n'est pas un multiple de 2 supérieur à 0`
        }
    }
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;