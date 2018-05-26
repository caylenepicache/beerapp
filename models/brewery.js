'use strict'
module.exports = function(sequelize, Sequelize) {
    var Brewery = sequelize.define("Brewery", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },


        breweryName: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },
        rbBrewId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }               

            
        }

    });
    //Associating breweries with beers and addresses 

    Brewery.associate = function(models) {
        Brewery.belongsToMany(models.user, {through: 'UserBrewery'});
       Brewery.belongsToMany(models.Address, {through: 'BreweryAddress'});
        }



    return Brewery;

    return wishList;
}

