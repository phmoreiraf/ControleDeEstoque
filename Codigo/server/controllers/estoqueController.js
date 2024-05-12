const fs = require('fs').promises;
const path = require('path');

class estoqueController {
    async create(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            let estoques = [];
            try {
                const rawData = await fs.readFile(dataPath);
                estoques = rawData ? JSON.parse(rawData) : [];
            } catch (err) {
                console.error('Falha ao ler o arquivo', err);
            }
            const novosEstoque = {
                id: estoques.length > 0 ? estoques[estoques.length - 1].id + 1 : 1,
                equipamento: req.body.equipamento,
                marca: req.body.marca,
                modelo: req.body.modelo,
                quantidade: req.body.quantidade,
                dataEntrada: req.body.dataEntrada,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao
            };
            estoques.push(novosEstoque);
            await fs.writeFile(dataPath, JSON.stringify(estoques));
            return res.status(200).json(novosEstoque);
        } catch (erro) {
            return res.status(500).json('Equipamento não cadastrado' + erro);
        }
    }

    async index(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            const rawData = await fs.readFile(dataPath);
            const estoquesImport = JSON.parse(rawData);
            return res.status(200).json(estoquesImport);
        } catch (erro) {
            return res.status(500).json('Erro ao encontrar os equipamentos' + erro);
        }
    }

    async update(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            const rawData = await fs.readFile(dataPath);
            let estoques = JSON.parse(rawData);
            const estoqueIndex = estoques.findIndex(estoque => estoque.id == req.params.id);
            if (estoqueIndex < 0) throw new Error('Estoque não encontrado');
            estoques[estoqueIndex] = {
                ...estoques[estoqueIndex],
                equipamento: req.body.esquipamento,
                marca: req.body.marca,
                modelo: req.body.modelo,
                quantidade: req.body.quantidade,
                dataEntrada: req.body.dataEntrada,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao
            };
            await fs.writeFile(dataPath, JSON.stringify(estoques));
            return res.status(200).json('Sucesso ao atualizar o equipamento');
        } catch (erro) {
            return res.status(500).json('Erro ao atualizar' + erro);
        }
    }

    async delete(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            const rawData = await fs.readFile(dataPath);
            let estoques = JSON.parse(rawData);
            estoques = estoques.filter(estoque => estoque.id != req.params.id);
            await fs.writeFile(dataPath, JSON.stringify(estoques));
            return res.status(200).json('Sucesso ao deletar');
        } catch (erro) {
            return res.status(500).json('Erro ao deletar' + erro);
        }


    }

    async filterByEquipamento(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            const rawData = await fs.readFile(dataPath);
            let estoques = JSON.parse(rawData);
            estoques = estoques.filter(estoque => estoque.equipamento === req.params.equipamento);
            return res.status(200).json(estoques);
        } catch (erro) {
            return res.status(500).json('Erro ao filtrar' + erro);
        }
    }

    async filterByData(req, res) {
        try {
            const dataPath = path.resolve(__dirname, '../data/estoque.json');
            const rawData = await fs.readFile(dataPath);
            let estoques = JSON.parse(rawData);
            estoques = estoques.filter(estoque => estoque.dataEntrada === req.params.data);
            return res.status(200).json(estoques);
        } catch (erro) {
            return res.status(500).json('Erro ao filtrar' + erro);
        }
    }
}

module.exports = new estoqueController();