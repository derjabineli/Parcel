const mongoose = require("mongoose")
const Schema = mongoose.Schema

const packageSchema = new Schema ({
    address1:{
        type: String,
        required: true
    },
    city1:{
        type: String,
        required: true
    },
    state1:{
            type: String,
            required: true
        },
    zip1:{
        type: String,
        required: true,
    },
    address2:{
        type: String,
        required: true
    },
    city2:{
        type: String,
        required: true
    },
    state2:{
            type: String,
            required: true
        },
    zip2:{
        type: String,
        required: true,
    }

})

const Package = mongoose.model("Package", packageSchema)
module.exports = Package

