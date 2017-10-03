module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER,
    }
  }, {
      classMethods: {
        associate: (models) => {
          Group.hasMany(models.Message, {
            foreignKey: 'GroupId'
          });
          Group.belongsToMany(models.User, {
            through: 'UserGroup',
            foreignKey: 'GroupId',
            onDelete: 'CASCADE'
          });
        }
      }
    });
  return Group;
};

