module.exports = (sequelize, DataTypes) => {
  const ReadMessage = sequelize.define('ReadMessage', {
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        ReadMessage.belongsTo(models.Message, {
          foreignKey: 'messageId'
        });
      }
    }
  });
  return ReadMessage;
};
