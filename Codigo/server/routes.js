const { Router } = require("express");
const router = new Router();
const estoqueRoutes = require("./routes/estoqueRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoute = require("./routes/authRoute");

router.use(estoqueRoutes, userRoutes, authRoute);

module.exports = router;