'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('note', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: 'User',

          // This is the column name of the referenced model
          key: 'id'
        }
      },

      category_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: 'Category',

          // This is the column name of the referenced model
          key: 'id'
        }
      },

      title: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
        validate: {
          length: 100
        }
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('note');
  }
};