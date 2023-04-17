const express = require("express");

const { httpGetAllPlanets } = require("./planets.controllers");

const planetsRouter = express.Router();

planetsRouter.get("/planet", httpGetAllPlanets);

module.exports = planetsRouter;
