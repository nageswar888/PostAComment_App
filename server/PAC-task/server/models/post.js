'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.STRING,
    postedBy: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
    Post.hasMany(models.Likes, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
  };
  return Post;
};
