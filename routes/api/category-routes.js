const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories with associated products
  Category.findAll({
    include: [Product]
  })
  .then((cats) => res.json(cats))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value with its associated Products
  Category.findByPk(req.params.id, {
    include: [Product]
  })
  .then((cat) => res.json(cat))
  .catch((err) => res.status(404).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCat) => res.json(newCat))
  .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {id: req.params.id}
  })
.then((updatedCat)=> res.json(updatedCat))
.catch((err)=> res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
