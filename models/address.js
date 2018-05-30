'use strict'
module.exports = function(sequelize, Sequelize) {
    var wishlist1 = sequelize.define("wishlist1", {
        address: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        userID: {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        rbBrewId: {
            type: Sequelize.STRING,
            allowNUll: true
        },
        url: {
            type: Sequelize.STRING,
            allowNull: true
        },
        brewery: {
            type: Sequelize.STRING,
            allowNUll: false
        }
        
    });
    //Associating wishlist1 to breweries
    
    return wishlist1;
}

