const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Product = db.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [4, 20],
    trim: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    trim: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    trim: true,
  },
});

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [4, 20],
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [4, 20],
    trim: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [8, 20],
    trim: true,
  },
});

const userProduct = db.define("userProduct", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // 'Movies' would also work
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product, // 'Movies' would also work
      key: "id",
    },
  },
});

User.belongsToMany(Product, { through: userProduct });
Product.belongsToMany(User, { through: userProduct });

module.exports = { Product, User };
