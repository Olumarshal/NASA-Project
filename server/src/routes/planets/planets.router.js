const express = require("express");

const { getAllPlanets } = require("./planets.controllers");

const planetsRouter = express.Router();

planetsRouter.get("/planet", getAllPlanets);

module.exports = planetsRouter;
