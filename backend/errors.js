exports.handleInvalidPath = (req, res, next) => {
  res.status(404).send({ msg: "path not found" });
};
