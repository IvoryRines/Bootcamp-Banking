const User = require("./User");
const Blog = require("./Blog");
const Post = require("./Posts");

Blog.hasMany(Post, {
  foreignKey: "post_id",
});

Post.belongsTo(Blog, {
  foreignKey: "post_id",
});

module.exports = { User, Blog, Post };
