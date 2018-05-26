module.exports = function (sequelize, Sequelize) {
    var BreweryList = sequelize.define("BreweryList", {
        brewery: {
            type: Sequelize.STRING,

        },
        url: {
            type: Sequelize.STRING,

        },
        address: {
            type: Sequelize.STRING,

        },
        latitude: {
            type: Sequelize.DECIMAL(10, 7),

        },
        longitude: {
            type: Sequelize.DECIMAL(10, 7),

        },
        rbBrewId: {
            type: Sequelize.INTEGER,
 

        }

    });
    //Associating breweries with beers and addresses 



    return BreweryList;
}