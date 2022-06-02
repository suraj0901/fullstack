const { CommonUtils } = require("../common/error.model.js");
class ProductController {
  static async getAllProduct(req, res) {
    try {
      const user = req.user;
    } catch (error) {
      CommonUtils.catchError(res, error);
    }
  }
}
