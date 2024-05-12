const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const session = require("express-session");

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors({}));
        this.server.use(express.urlencoded({ extended: false }));
        this.server.use(
            session({
                secret: "segredo",
                resave: false,
                saveUninitialized: true,
            })
        );
    }
    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;