const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { User, Project };
