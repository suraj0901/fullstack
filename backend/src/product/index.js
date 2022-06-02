const express = require("express");
const ProductController = require("./product.controller.js");

const app = express();

app.get("/", ProductController.getAllProducts);

module.exports = app;
