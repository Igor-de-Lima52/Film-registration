<<<<<<< HEAD
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

=======
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

>>>>>>> 6a4760d (Back-end finished)
module.exports = tagsRoutes;