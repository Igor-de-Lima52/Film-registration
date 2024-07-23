<<<<<<< HEAD
const { Router } = require("express");

const usersRouter = require("./users.routes.js");
const notesRouter = require("./notes.routes.js");
const tagsRouter = require("./tags.routes.js");
const sessionRouter = require("./sessions.routes.js");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

=======
const { Router } = require("express");

const usersRouter = require("./users.routes.js");
const notesRouter = require("./notes.routes.js");
const tagsRouter = require("./tags.routes.js");
const sessionRouter = require("./sessions.routes.js");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

>>>>>>> 6a4760d (Back-end finished)
module.exports = routes;