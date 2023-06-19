const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_username',
});

module.exports = { User, Post };

