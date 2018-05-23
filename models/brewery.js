module.exports = function(sequelize, DataTypes) {
    var Brewery = sequelize.define("Brewery", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },


        breweryName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },
        rbBrewId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
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


    
    return Brewery;
}