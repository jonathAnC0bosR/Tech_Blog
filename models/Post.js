const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: DataTypes.NOW,
        },
        user_username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        },
    },
    {
        sequelize,
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'post',
    }
);

module.exports = Post;