const express = require('express');
const CRUD = require('easy-express-crud-generator');
const router = express.Router();
const mongoose = require("mongoose");

const userSchema = require("../models/user")
const UserModel = mongoose.model("User", userSchema);

const livreSchema = require("../models/livre")
const LivreModel = mongoose.model("Livre", livreSchema);

const userRouter = new CRUD(UserModel).getRouter(express.Router());
const livreRouter = new CRUD(LivreModel).getRouter(express.Router());


router.use("/user", userRouter);
router.use("/livre", livreRouter);

module.exports = router;
