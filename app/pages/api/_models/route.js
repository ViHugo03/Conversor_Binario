import sequelize from "sequelize";
import connection from "../_Config/route";

const Conversao = connection.define('numeroConvertido', {
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
    tableName: 'numeroConvertido',
    timestamps: false
  });
  
  export default Conversao;