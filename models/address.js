'use strict'
module.exports = function(sequelize, Sequelize) {
    var Address = sequelize.define("Address", {
        address: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        favorite: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        }
        
    });
    //Associating address to breweries
    Address.associate = function(models){
        Address.belongsTo(models.Brewery, {through: 'BreweryAddress'});
        

    }
    return Address;
}

