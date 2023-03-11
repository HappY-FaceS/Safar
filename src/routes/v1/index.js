const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', CityController.create); //POST : /api/v1/city
router.delete('/city/:id', CityController.destroy); //DELETE : /api/v1/city/id
router.get('/city/:id', CityController.get); // GET : /api/v1/city/id
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update); // PATCH : /api/v1/city/id

module.exports = router;