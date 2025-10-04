const mySqlPool = require("../config/db");

// Get all student list
const getStudents = async (req, res) => {
  try {
  const [rows] = await mySqlPool.query('SELECT * FROM students');

    if (!rows || rows.length === 0) {
      return res.status(404).send({
        success: false,
        message: 'No Records Found',
        data: []
      });
    }

    res.status(200).send({
      success: true,
      message: 'All student records',
      data: rows
    });

  } catch (error) {
    console.error('Error executing query in getStudents:', error);
    res.status(500).send({
      success: false,
      message: 'Error in Get All Student API',
      error: error && error.message ? error.message : String(error)
    });
  }
};

module.exports = { getStudents };
