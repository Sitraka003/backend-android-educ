const express = require('express');
const router = express.Router();
const api = require("./api");
const mongoose = require("mongoose");

const userSchema = require("../models/user")
const {USER_FIND} = require("../services/const");
const {only} = require("../services/utility");
const UserModel = mongoose.model("User", userSchema);

router.post("/login", async function (req, res) {
    if (req.body.email && req.body.password) {
        const user = await UserModel.findOne({
            email: req.body.email,
            hashed_password: req.body.password
        });

        if (!user) {
            res.status(404).json({
                code: 404,
                message: "User not found",
                data: {},
            });
        }
        return res.status(200).json({
            code: 200,
            message: "User connected",
            data: {user: only(user, USER_FIND)},
        });
    }
});

router.post("/inscriptiion", async function (req, res) {
    if (req.body.email && req.body.password && req.body.nom && req.body.age) {
        const body = only(req.body, "email password nom prenom age");
        await UserModel.init();
        try {
            const user = new UserModel(body);
            await user.save();
            return res.status(200).json({
                code: 200,
                message: "User created",
                data: {user: only(user, USER_FIND)},
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                code: 500,
                message: "Internal server error",
                data: e,
            });
        }
    }
});
router.use("/api", api);

module.exports = router;
