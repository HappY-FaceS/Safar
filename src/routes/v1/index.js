const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const { FlightMiddlewares } = require('../../middlewares/index');
const router = express.Router();

router.post('/city', CityController.create); //POST : /api/v1/city
router.delete('/city/:id', CityController.destroy); //DELETE : /api/v1/city/id
router.get('/city/:id', CityController.get); // GET : /api/v1/city/id
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update); // PATCH : /api/v1/city/id


router.get('/flights',FlightController.getAll); // get all the flights based on filters
router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

router.post('/airports', AirportController.create);

module.exports = router;