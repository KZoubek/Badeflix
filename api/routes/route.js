const { Router } = require('express');
const request = require('../controllers/request.js');

const routes = Router();

// update with our paths!
routes.get('/getCity/:city', request.getCity);
routes.get('/getCity/:latMin/:latMax/:lonMin/:lonMax/:scope', request.getCityByCoords);

routes.get('/getWeather/:city/:country', request.getWeather);
routes.get('/getCityInformation/:country', request.getCityInformation);
routes.get('/getImages/:city', request.getImages);
routes.get('/userLocation', request.userLocation);
routes.get('/getTransportRoute/:origin/:destination', request.getTransportRoute);

routes.post('/newPost', request.newPost);
routes.delete('/deletePost/:title', request.deletePost);
routes.get('/getLibrary', request.getLibrary);

routes.get('/login/:username/:password/:cookie', request.login);
routes.post('/register/:cookie/:email/:username/:password', request.register);
routes.put('/editUser/:cookie/:email/:username/:password', request.editUser);
routes.delete('/deleteUser/:cookie', request.deleteUser);
routes.patch('/logOut/:cookie', request.logOut);
routes.get('/username/:cookie', request.username);
routes.get('/userdata/:username', request.getUser);

module.exports = routes;