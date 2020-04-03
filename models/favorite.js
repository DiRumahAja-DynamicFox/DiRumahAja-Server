'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Favorite extends Model {

  }

  Favorite.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter Url"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter UserId"
        }
      }
    }
  }, {
    sequelize,
    modelName: "Favorite" 
  })
  
  
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User)
  };
  return Favorite;
};