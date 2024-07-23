<<<<<<< HEAD
const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

=======
const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

>>>>>>> 6a4760d (Back-end finished)
module.exports = connection;