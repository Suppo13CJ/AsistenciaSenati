const service = require("../services/lista-asistencia.service");

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await service.getById(id);

    if (!data) {
      return res.status(404).json({ message: "No encontrado" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};