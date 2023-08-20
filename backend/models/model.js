const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const consumersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
    },
    followers: [{ type: ObjectId, ref: "CONSUMER" }],
    following: [{ type: ObjectId, ref: "CONSUMER" }]
})

module.exports =mongoose.model("CONSUMER",consumersSchema);