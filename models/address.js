module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        favorite: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }
        
    });
    //Associating breweries with beers and addresses 
    Address.associate = function(models){
        Address.belongsTo(models.Brewery,{
            foreignKey:{
                allowNull: false
            }
        });

    }
    return Address;
}