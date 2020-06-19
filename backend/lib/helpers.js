const bcrypt = require("bcryptjs");

const helpers = {};

//Codificar password
helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt); //Padrão para codificar a senha
  return hash; //hash é a senha encryptada(codificada)
};

//Comparar Passwords
helpers.validatePassword = async (password, savedPassword) => {
  return await bcrypt.compare(password, savedPassword);
};

module.exports = helpers;
