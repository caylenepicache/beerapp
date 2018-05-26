'use strict'
module.exports = function(sequelize, Sequelize) {
    var Brewery = sequelize.define("Brewery", {
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
    }
    });
    //Associating breweries with beers and addresses 
    Brewery.associate = function(models) {
        Brewery.belongsToMany(models.user, {through: 'UserBrewery'});
       Brewery.belongsToMany(models.Address, {through: 'AddressBrewery'});
        }

    
    return Brewery;
}
