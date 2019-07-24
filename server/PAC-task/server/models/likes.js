'use strict';
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    postId: DataTypes.INTEGER
  }, {});
  Likes.associate = function(models) {
    // associations can be defined here
    Likes.belongsTo(models.Post, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
  };
  return Likes;
};
