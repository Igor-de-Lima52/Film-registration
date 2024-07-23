<<<<<<< HEAD
const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join("");

  sqliteConnection().then(db => db.exec(schemas)).catch(error => console.error(error));
}

=======
const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join("");

  sqliteConnection().then(db => db.exec(schemas)).catch(error => console.error(error));
}

>>>>>>> 6a4760d (Back-end finished)
module.exports = migrationsRun;