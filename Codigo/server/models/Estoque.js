const { Sequelize, Model } = require("sequelize");

class Cliente extends Model {
    static init(sequelize) {
        super.init({
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },

                equipamento: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },

                marca: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },

                modelo: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },

                dataEntrada: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },

                localizacao: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },

                descricao: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
            },

            {
                sequelize,
                modelName: "Cliente",
                freezeTableName: true,
                timestamps: true, // Adiciona timestamps automaticamente
            }
        );
    }
}

module.exports = Cliente;