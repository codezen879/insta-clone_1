const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    likes: [{ type: ObjectId, ref: "CONSUMER" }],
    comments: [{
        comment: { type: String },
        postedBy: { type: ObjectId, ref: "CONSUMER" }
    }],
    postedBy: {
        type: ObjectId,
        ref: "CONSUMER"
    }
}, { timestamps: true })

module.exports = mongoose.model("POST", postSchema);