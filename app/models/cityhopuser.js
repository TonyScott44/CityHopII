module.exports = function(sequelize, DataTypes) {
  var Cityhopuser = sequelize.define("Cityhopuser", {
    email: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    CC: DataTypes.STRING,
    expDate: DataTypes.STRING,
    secCode: DataTypes.STRING,
    address: DataTypes.STRING,
    hops: DataTypes.STRING,
    //orderDate: DataTypes.STRING,
    orderTotal: DataTypes.STRING

    });
  return Cityhopuser;
};
