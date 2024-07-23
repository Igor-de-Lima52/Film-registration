<<<<<<< HEAD
const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post("/", sessionsController.create);

=======
const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post("/", sessionsController.create);

>>>>>>> 6a4760d (Back-end finished)
module.exports = sessionRoutes;