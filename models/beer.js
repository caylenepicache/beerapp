'use strict'
module.exports = function(sequelize, Sequelize) {
    var Beer = sequelize.define("Beer", {
        beer: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        beerType: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        }, 
        wishList: {
            type: Sequelize.BOOLEAN, 
            allowNull: false 
        }
    });
    //Associating beers with users and 

<<<<<<< HEAD
        Beer.belongsToMany(models.user, 
            {
                through: 'UserBeer'
            });


    };
=======
>>>>>>> ce2faf43816b61c297e29dec4a84ef2944a6592e
  
    return Beer;
}


