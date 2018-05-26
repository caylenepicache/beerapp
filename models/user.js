'use strict'
module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1,18]
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1,18]
            }
        },
        username: {
            type: Sequelize.TEXT,
            validate: {
                len: [1,18]
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

    });
    //Associating user with many to many relationships with Beers and Breweries
   User.associate = function(models) {
        User.belongsToMany(models.Brewery, {through: 'BreweryUse'});
        User.belongsToMany(models.Beer, {through: 'BeerUser'});
        
    };
    
    return User;
}