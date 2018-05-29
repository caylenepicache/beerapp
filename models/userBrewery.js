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



    return UserBrewery;
}