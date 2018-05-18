module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        breweryName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        
    })
}