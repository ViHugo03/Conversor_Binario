import sequelize from "sequelize";
import connection from "../../Config/DatabaseConfig.mjs";

const Usuario = connection.define('usuario', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    dataCadastro: {
        type: sequelize.DATE,
    }
}, {
    tableName: 'usuario',
    timestamps: false
});


export default Usuario;