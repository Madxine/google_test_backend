const express = require('express');
const requireAuth = require("../middlewares/requireAuth")

const{
    createLocation,
    getAllLocation,
    getOneLocation,
    updateLocation,
    deleteOneLocation
} = require('../controllers/location');

const api = express.Router();

api.route('/').get(getAllLocation);
api.route('/:id').get(getOneLocation);

//below it needs to be authaticated ↓
api.use(requireAuth);
api.route('/').post(createLocation);
api.route('/:id').put(updateLocation).delete(deleteOneLocation);


module.exports = api;