const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
    {
        email: { type: String, required: [true, 'Name is required'] },
        password: { type: String, required: [true, 'Name is required'], minlength: [7, "Password must be 8 chars long"] },
        username: { type: String, required: [true, 'Name is required'], minlength: [3, "Name must be 4 chars long"] },
        drink: {
            identifier: { type: String, default: "" },
            description: { type: String, default: "" },
            strength: { type: Number, default: 0 },
            milk: { type: Boolean, default: false },
            sugars: { type: Number, default: 0 }
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dataGroup"
        },
        orders: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dataOrder"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("employees", employee);