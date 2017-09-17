module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'normal'
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender: {
      type: DataTypes.INTEGER,
    }
  });
  Message.associate = (models) => {
    Message.belongsTo(models.Group, {
      foreignKey: 'groupId',
      onDelete: 'CASCADE'
    });
  };
  return Message;
};
