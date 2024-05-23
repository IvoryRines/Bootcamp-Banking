const User = require("./User");
const Blog = require("./Account");
const Post = require("./Checking");
const Post = require("./Checking");

Blog.hasMany(Post, {
  foreignKey: "post_id",
});

Post.belongsTo(Blog, {
  foreignKey: "post_id",
});

module.exports = { User, Blog, Post };
