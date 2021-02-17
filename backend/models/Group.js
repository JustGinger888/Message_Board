const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let group = new Schema(
    {
        username: { type: String, required: [true, 'Name is required'], minlength: [3, "Name must be 4 chars long"] },
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "dataOrder"
        }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("employees", employee);