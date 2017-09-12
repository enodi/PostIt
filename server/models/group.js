module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    creator: {
      type: DataTypes.STRING,
    }
  });
  Group.associate = (models) => {
    Group.belongsToMany(models.User, {
      through: 'UserGroup',
      foreignKey: 'groupId'
    });
    Group.hasMany(models.Message, {
      foreignKey: 'groupId',
      as: 'groupMessage'
    });
  };
  return Group;
};
