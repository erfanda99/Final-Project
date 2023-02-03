'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reminder', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      note_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: 'Note',

          // This is the column name of the referenced model
          key: 'id'
        }
      },

      reminder_time: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,

      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reminder');
  }
};