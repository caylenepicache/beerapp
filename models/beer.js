module.exports = function(sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
        beer: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        beerType: {
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
        wishList: {
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }
    });
    //Associating breweries with beers and addresses 
  
    return Beer;
}