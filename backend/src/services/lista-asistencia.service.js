const repository = require("../repositories/lista-asistencia.repository");

exports.getById = async (id) => {
  return await repository.getById(id);
};