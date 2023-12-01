const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate({ Statistic }) {
      this.hasMany(Statistic, { foreignKey: 'enemy_id' });
      // define association here
    }
  }
  Enemy.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Enemy',
    }
  );
  return Enemy;
};
