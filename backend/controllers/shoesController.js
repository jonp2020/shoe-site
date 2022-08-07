// route GET /api/shoes
const getAllShoes = (req, res) => {
  res.status(200).json({ msg: "Get all shoes" });
};

// route GET /api/shoes/womens
const getWomensShoes = (req, res) => {
  res.status(200).json({ msg: "Get womens shoes" });
};

// route GET /api/shoes/mens
const getMensShoes = (req, res) => {
  res.status(200).json({ msg: "Get mens shoes" });
};

// route GET /api/shoes/mens
const getKidsShoes = (req, res) => {
  res.status(200).json({ msg: "Get kids shoes" });
};

// route PUT /api/shoes/:id
const updateShoe = (req, res) => {
  res.status(200).json({ msg: `Update shoe ${req.params.id}` });
};

module.exports = {
  getAllShoes,
  getWomensShoes,
  getMensShoes,
  getKidsShoes,
  updateShoe,
};
