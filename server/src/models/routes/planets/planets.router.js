const express = require("express");

const planetsRouter = express.Router();

planetsRouter.get("/planet", getAllPlanets);

module.exports = planetsRouter