'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn(
    'Local',
    'requestLocal_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'RequestLocals', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    }
   )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn(
    'Local',
    'requestLocal_id'
   );
  }
};
