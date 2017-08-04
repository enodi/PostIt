module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        Message.hasMany(models.ReadMessage, {
          foreignKey: 'messageId'
        });
        Message.hasMany(models.DeletedMessage, {
          foreignKey: 'messageId'
        });
        Message.belongsTo(models.User, {
          foreignKey: 'userId'
        });
        Message.belongsTo(models.Group, {
          foreignKey: 'groupId'
        });
      }
    }
  });
  return Message;
};
