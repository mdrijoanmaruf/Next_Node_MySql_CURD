const express = require('express');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

// load .env into process.env (if present)
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/students', require('./routes/studentsRoutes'));

app.get('/test', (req, res) => {
    res.status(200).send('Next.js Node.js MySql App');
});

const PORT = process.env.PORT || 5000;

// Conditional Listen: verify DB connection before starting server
mySqlPool
    .query('SELECT 1')
    .then(() => {
        console.log('MySql DB Connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to MySql DB:', error && error.message ? error.message : error);
    });
