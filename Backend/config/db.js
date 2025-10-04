const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'saifsaif',
    database: 'student_db'
})

module.exports = mySqlPool;