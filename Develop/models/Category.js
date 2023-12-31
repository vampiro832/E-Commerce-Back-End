const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    catagory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // products: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // price: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: 0,
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'category',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
