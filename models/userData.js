module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        breweryName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        }
        
    });
    return Users;
}