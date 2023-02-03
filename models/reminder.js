'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reminder.belongsTo(models.Note, {
        foreignKey: 'note_id'
      })
    }
  }
  Reminder.init({
    note_id: DataTypes.INTEGER,
    reminder_time: DataTypes.DATE
  },

  {
    sequelize,
    modelName: 'Reminder',
    tableName: 'reminder',
  });
  return Reminder;
};