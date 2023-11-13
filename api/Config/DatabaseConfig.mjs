import sequelize from 'sequelize';
import { config } from 'dotenv';
config();

const { HOST, DATABASE, USER, PASSWORD } = process.env;


// ordem dos parâmetros: database, user, password, objeto de configuração (host, linguagem do banco, porta);
const connection = new sequelize.Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    port: 3306,
});

connection.authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!');
    }
    ).catch((error) => {
        console.log(`Erro ao conectar com o banco de dados: ${error}`);
    }
    );

export default connection;