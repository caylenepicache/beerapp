module.exports = function(sequelize, DataTypes) {
    var Brewery = sequelize.define("Brewery", {
        breweryName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });
    //Associating breweries with beers and addresses 
    Brewery.associate = function(models){
        Brewery.hasMany(models.Beer, {
            foreignKey:{
                allowNull: false
            }
        });
        Brewery.hasMany(models.Address, {
            foreignKey:{
                allowNull: false
            }
        });
        

    }
    return Brewery;
}