module.exports = (sequelize, DataTypes) => {
  const DeletedGroup = sequelize.define('DeletedGroup', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        DeletedGroup.belongsTo(models.Group, {
          foreignKey: 'groupId'
        });
      }
    }
  });
  return DeletedGroup;
};
