const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Enemy }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Enemy, { foreignKey: 'enemy_id' });
      // define association here
    }
  }
  Statistic.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      isHeroAlive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      timePlayed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      killedEnemies: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enemy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Statistic',
    }
  );
  return Statistic;
};
