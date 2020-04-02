'use strict';
const favorites = require('../favorites.json')
favorites.forEach( el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Favorites', favorites, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Favorites', null, {});
  }
};
