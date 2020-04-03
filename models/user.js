'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  const { encryptPass } = require('../helpers/bcrypt')

  class User extends Model {
    
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email already exist"
      },
      validate: {
        notNull: {
          msg: "Please Enter Your Email"
        },
        notEmpty(value) {
          if(!value) {
            throw new Error("Email Cannot Be Empty ")
          }
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter Your Password"
        },
        notEmpty(value) {
          if(!value) {
            throw new Error("Password Cannot Be Empty ")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(user, options) {
        user.password = encryptPass(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Favorite)
  };
  return User;
};