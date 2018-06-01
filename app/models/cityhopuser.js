module.exports = function(sequelize, DataTypes) {
  var Cityhopuser = sequelize.define("Cityhopuser", {
    email: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    credit_card: DataTypes.STRING
  });
  return Cityhopuser;
};
