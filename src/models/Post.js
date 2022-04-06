const db = require("../config/db/bd");

const Post = db.sequelize.define("postagens", {
  RAI: {
    type: db.Sequelize.INTEGER(),
    validate: {
      isInt: true,
      len: [8]
    }
  }
});
Post.sync({ force: false });

module.exports = Post;
