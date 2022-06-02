class NotFoundError extends Error {}
class BadRequestError extends Error {}
class UnAuthorizedError extends Error {}

class CommonUtils {
  static catchError(res, err) {
    if (err instanceof NotFoundError) {
      return res.status(404).json({
        reason: err.message || "DB error",
      });
    }

    if (err instanceof UnAuthorizedError) {
      return res.status(401).json({
        reason: err.message || "Unauthorized",
      });
    }

    if (err instanceof BadRequestError) {
      return res.status(400).json({
        reason: err.message || "DB error",
      });
    }

    return res.status(500).json({
      reason: err.message || "Internal Server Error.",
    });
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  UnAuthorizedError,
  CommonUtils,
};
