import sequelize from "sequelize";
import connection from "../../Config/DatabaseConfig.mjs";

const Conversao = connection.define('numeroconvertido', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    decimal: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    octal: {
      type: sequelize.STRING(11),
      allowNull: false
    },
    hexa: {
      type: sequelize.STRING(8),
      allowNull: false
    },
    bin: {
      type: sequelize.STRING(32),
      allowNull: false
    },
    dataConversao: {
      type: sequelize.DATE,
    }
  }, {
    tableName: 'numeroconvertido',
    timestamps: false
  });
  
  export default Conversao;