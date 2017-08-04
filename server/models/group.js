module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupName: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'group name already exists'
      },
      validate: {
        notEmpty: false
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        Group.hasMany(models.Message, {
          foreignKey: 'groupId'
        });
        Group.hasMany(models.DeletedGroup, {
          foreignKey: 'groupId'
        });
        Group.belongsToMany(models.User, {
          through: 'UserGroup'
        });
      }
    }
  });
  return Group;
};
