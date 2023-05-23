const express = require('express');
const app = express();
const db = require('../config/database');
app.use(express.json())
// CREATE TABLE query
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS my_table (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
  )
`;



// Establish the database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  // Execute CREATE TABLE query
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating the table:', err);
      return;
    }

    console.log('Table created successfully');
  });
});

app.post('/post', (req, res) => {
  const name = req.body.name;
 console.log(name)
  const insertQuery = 'INSERT INTO my_table (name) VALUES (?)';

  db.query(insertQuery, [name], (err, result) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted successfully');
    res.json({ message: 'Data inserted successfully' });
  });
});


module.exports = app;
