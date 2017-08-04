module.exports = (sequelize, DataTypes) => {
  const DeletedMessage = sequelize.define('DeletedMessage', {
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        DeletedMessage.belongsTo(models.Message, {
          foreignKey: 'messageId'
        });
      }
    }
  });
  return DeletedMessage;
};
