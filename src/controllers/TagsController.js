<<<<<<< HEAD
const knex = require("../database/knex");

class TagsController{
  async index(req, res){
    const { user_id } = req.params;

    const tags = await knex("tags").where({ user_id }).groupBy("name");

    return res.json(tags);
  }
}

=======
const knex = require("../database/knex");

class TagsController{
  async index(req, res){
    const { user_id } = req.params;

    const tags = await knex("tags").where({ user_id }).groupBy("name");

    return res.json(tags);
  }
}

>>>>>>> 6a4760d (Back-end finished)
module.exports = TagsController;