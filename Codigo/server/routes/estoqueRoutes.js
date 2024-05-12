const { Router } = require("express");
const router = new Router();
const estoque = require("../controllers/estoqueController");

// Defina suas rotas
router.get("/", (req, res) => {
    res.send("Bem-vindo ao Controle de estoque!");
});

router.post("/estoque", estoque.create);
router.get("/estoque", estoque.index);
router.put("/estoquePut/:id", estoque.update);
router.delete("/estoque/:id", estoque.delete);
router.get("/estoque/equipamento/:equipamento", estoque.filterByEquipamento);
router.get("/estoque/data/:data", estoque.filterByData);


module.exports = router;