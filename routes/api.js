const express = require('express');
const CRUD = require('easy-express-crud-generator');
const router = express.Router();
const mongoose = require("mongoose");

const userSchema = require("../models/user")
const UserModel = mongoose.model("User", userSchema);

const livreSchema = require("../models/livre")
const LivreModel = mongoose.model("Livre", livreSchema);

const leconSchema = require("../models/lecon")
const leconModel = mongoose.model("Lecon", leconSchema);

const typeleconSchema = require("../models/typelecon")
const typeLeconModel = mongoose.model("TypeLecon", typeleconSchema);

const qcmSchema = require("../models/qcm")
const qcmModel = mongoose.model("QCM", qcmSchema);

const contenuQcmSchema = require("../models/contenuqcm")
const contenuQcmModel = mongoose.model("ContenuQcm", contenuQcmSchema);

const niveauSchema = require("../models/niveau")
const niveauModel = mongoose.model("Niveau", niveauSchema);



const userRouter = new CRUD(UserModel).getRouter(express.Router());
const livreRouter = new CRUD(LivreModel).getRouter(express.Router());
const leconRouter = new CRUD(leconModel).getRouter(express.Router());
const typeLeconRouter = new CRUD(typeLeconModel).getRouter(express.Router());
const qcmRouter = new CRUD(qcmModel).getRouter(express.Router());
const contenuQcmRouter = new CRUD(contenuQcmModel).getRouter(express.Router());
const niveauRouter = new CRUD(niveauModel).getRouter(express.Router());




router.use("/user", userRouter);
router.use("/livre", livreRouter);
router.use("/lecon", leconRouter);
router.use("/typeLecon", typeLeconRouter);
router.use("/qcm", qcmRouter);
router.use("/contenuQcm", contenuQcmRouter);
router.use("/niveau", niveauRouter);

module.exports = router;
