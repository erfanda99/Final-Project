'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Note.belongsTo(models.Category, {
    foreignKey: 'category_id'
  })
  
  Note.hasMany(models.Reminder, {
    foreignKey: 'note_id'
  })
      // define association here
    }
  }
  Note.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    // category_id: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Note',
    tableName: 'note',
  });
  return Note;
};