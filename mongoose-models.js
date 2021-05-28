const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27018/mongoose-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Cat = mongoose.model('Cat', {
    name: {
        type: String,
        required: true,
        validate(value) {
            console.log(value);
            if (!(value.length>5)) {
                throw new Error(value + " should be of length 5");
            }
        }
    }, age: {
        type: Number,
        min: 10
    }
});

module.exports = {
    Cat
}