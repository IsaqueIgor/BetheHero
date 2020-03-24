const express = require("express");
const routes = express.Router();

routes.post('/users', (request , response) => {
    const body = request.body;

    return response.json({
        event: 'Semana OmniStack 11.0',
        student: 'Isaque Igor'
    });
});

module.exports = routes;

