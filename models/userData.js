'use strict'
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,15]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,15]
            }
        },
        username: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,15]
            }
        },
        last_login: {
            type: DataTypes.DATE
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
        
    });
    return User;
}