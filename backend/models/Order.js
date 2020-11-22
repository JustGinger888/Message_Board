const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let order = new Schema(
    {
        creatorUserID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Taster",
        },
        drinks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "dataOrder"
        }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("employees", employee);