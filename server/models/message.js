module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.ENUM,
      values: ['normal', 'urgent', 'critical']
    },
    GroupId: {
      type: DataTypes.INTEGER,
    },
    UserId: {
      type: DataTypes.INTEGER,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Message.belongsTo(models.Group, {
          foreignKey: 'GroupId',
          onDelete: 'CASCADE'
        });
        Message.belongsTo(models.User, {
          foreignKey: 'UserId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Message;
};

