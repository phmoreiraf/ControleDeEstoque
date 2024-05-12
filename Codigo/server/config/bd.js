//BANCO DE DADOS LOCAL;
const { Sequelize } = require("sequelize");

// Configurações de conexão com o banco de dados;
const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Phmcf#2003",
});

// Função para criar o banco de dados se não existir;
async function createDatabase() {
    try {
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS basedeestoque;`);
        console.log("Banco de dados criado com sucesso ou já existente");
    } catch (error) {
        console.error("Erro ao criar banco de dados:", error);
    }
}

// Chama a função para criar o banco de dados;
createDatabase();

// Exporta as configurações;
module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Phmcf#2003",
    database: "basedeestoque",
    define: {
        timestamp: true,
    },
};