const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
    age: { type: String, required: false },
});

module.exports = userSchema;
