const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryInfo = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryInfo = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryInfo) {
      res.status(404).json({ message: "There is no category that protrays this id!" });
    }
    res.status(200).json(categoryInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {


});

// update a category by its `id` value
router.put('/:id', async (req, res) => {


});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {


});

module.exports = router;
