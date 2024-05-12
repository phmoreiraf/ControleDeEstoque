const { Router } = require("express");
const router = new Router();
const estoqueRoutes = require("./routes/estoqueRoutes");

router.use(estoqueRoutes);

module.exports = router;