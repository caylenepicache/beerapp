
module.exports = function (sequelize, Sequelize) {
    var UserBrewery = sequelize.define("userBrewery", {
        
        brewery: {
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
        },

        userID: {
            type: Sequelize.INTEGER,
        },
        visited: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        }

    });

    return UserBrewery;


}