const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(404).json({ message: "There is no category that is associated with this id!" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Category.update(
      req.body,
      { where: { id = req.params.id }}
    );
    id (!categoryData) {
      res.status(404).json({ message: "There is no category that is associated with this id!" });
      return;
    }
    res.status(200).json(`Category ${req.params.id} was updated`);
  } catch (err) {
    res.status(500).json(err);
  }
  });

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {


});

module.exports = router;
