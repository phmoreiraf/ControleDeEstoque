const { Router } = require("express");
const router = new Router();
const estoque = require("../controllers/estoqueController");
const verificacao = require("../requireAuth");

// Defina suas rotas
router.get("/", (req, res) => {
    res.send("Bem-vindo ao Controle de estoque!");
});

router.post("/estoque", verificacao, estoque.create);
router.get("/estoque", verificacao, estoque.index);
router.put("/estoquePut/:id", verificacao, estoque.update);
router.delete("/estoque/:id", verificacao, estoque.delete);

module.exports = router;