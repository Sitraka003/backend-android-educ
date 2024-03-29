const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connexion à MongoDB réussie !");

        // Force HTTPS
        // app.use(requireHttps);

        // bodyParser
        app.use(bodyParser.json({limit: "50mb", extended: true}));
        app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));

        app.use(logger("dev"));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(
            session({
                secret: "itum1p9",
                resave: false,
                saveUninitialized: false,
            })
        );

        //Routes
        app.use("/", routes);
    })
    .catch((e) => {
        console.log(e);
        console.log("Connexion à MongoDB échouée !");
    });

module.exports = app;
