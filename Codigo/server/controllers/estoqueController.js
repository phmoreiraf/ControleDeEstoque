const { where } = require('sequelize');
const estoque = require('../models/Estoque');
const fs = require('fs').promises;
const path = require('path');

class estoqueController {
    async create(req, res) {
        try {
            const novosEstoque = await estoque.create({
                equipamento: req.body.esquipamento,
                marca: req.body.marca,
                modelo: req.body.modelo,
                dataEntrada: req.body.dataEntrada,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao
            })
            return res.status(200).json(novosEstoque)
        } catch (erro) {
            return res.status(500).json('Equipamento não cadastrado' + erro)
        }
    }

    async index(req, res) {
        try {
            const estoquesImport = await estoque.findAll()
            return res.status(200).json(estoquesImport)
        } catch (erro) {
            return res.status(500).json('Erro ao encontrar os equipamentos' + erro)
        }
    }

    async update(req, res) {
        try {
            await estoque.update({
                equipamento: req.body.esquipamento,
                marca: req.body.marca,
                modelo: req.body.modelo,
                dataEntrada: req.body.dataEntrada,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao
            }, { where: { id: req.params.id } })
            return res.status(200).json('Sucesso ao atualizar o equipamento')
        } catch (erro) {
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }

    async delete(req, res) {
        try {
            await estoque.destroy({
                where: { id: req.params.id }
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch (erro) {
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }

}

module.exports = new estoqueController()