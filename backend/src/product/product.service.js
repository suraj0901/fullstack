const { Product: ProductModel } = require("../model/model");

class ProductsServices {
  static async getAll(offset, limit) {
    const option = {
      offset: +offset,
      limit: +limit,
      attributes: {
        exclude: ["updatedAt", "password", "createdAt", "deletedAt"],
      },
    };
    return await ProductModel.findAll(option);
  }

  static async getByName(name) {
    const product = await ProductModel.findOne({
      where: { name },
    });
    return product;
  }

  static async addProduct(data) {
    return ProductModel.create({ ...data });
  }
}
