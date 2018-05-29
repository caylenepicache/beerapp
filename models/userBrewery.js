module.exports = function (sequelize, Sequelize) {
    var UserBrewery = sequelize.define("userBrewery", {
        
        breweryName: {
            type: Sequelize.STRING,
        },

        url: {
            type: Sequelize.STRING,
        },

        address: {
            type: Sequelize.STRING,
        },

        rbBrewId: {
            type: Sequelize.INTEGER,
        }

    });
    //Associating breweries with beers and addresses 

UserBrewery.associate = function(models) {
    UserBrewery.belongsToMany(models.user, { through: "UserBrewery"});
    UserBrewery.belongsToMany(models.Brewery, { through: "UserBrewery"});
}

    return UserBrewery;
}