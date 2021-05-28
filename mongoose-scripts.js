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

const kitty = new Cat({ name: "young cat", age: 9 });

// kitty.save().then(() => console.log('meow'));

// Cat.findOne({
//     _id: "60b05a49b08df649ccca5562"
// }, (err, data)=>{
//     console.log(err, data);
// })

// Cat.find({
//     age: {
//         $eq: 10
//     }
// }, (err, data)=>{
//     console.log(err, data);
// })

// Cat.updateOne({
//     age: {
//         $eq: 10
//     },
//     name: "data"
// }, {age: 15}, (err, data)=>{
//     console.log(err, data);
// })

// Cat.updateMany({
//     age: null
// }, {
//     age: 3
// }, (err,data)=>{
//     console.log(err, data);
// })

// Cat.deleteOne({
//     name: "data"
// }, (err, data)=>{
//     console.log(err, data);
// })

Cat.deleteMany({
    age: {
        $eq: 3
    }
}, (err, data)=>{
    console.log(err, data);
})