

const express = require('express');
const router = express.Router();
const db = require('./database');
 
const createTableQuery = `CREATE TABLE IF NOT EXISTS type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45)
  )`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        console.log('Error creating table:', err);
    } else {
        console.log('Table created successfully');
    }
});

//Get All Data's

router.get('/get', (req, res) => {
    const selectQuery = 'SELECT * FROM type';

    db.query(selectQuery, (err, result) => {
        if (err) {
            console.log('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
        } else {
            const rows = JSON.parse(JSON.stringify(result));
            res.json(rows);
        }
    });
});

//  Get Single Data

router.get('/get/:id', (req, res) => {
    const id = req.params.id;

    const singleData = 'SELECT * FROM TYPE WHERE id = ? ';
 
    db.query(singleData,[id], (err, result) => {
        if (err) {
            console.log('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
        } else {
            const rows = JSON.parse(JSON.stringify(result));
            res.json(rows);
        }
    });
})




//Post Data's

router.post('/post', (req, res) => {
    const name = req.body.name;
    const insertQuery = 'INSERT INTO type (name) VALUES (?)';
    const values = [name];

    db.query(insertQuery, values, (err, result) => {
        if (err) {
            console.log('Error posting data:', err);
            res.status(500).send('Error posting data');
        } else {
            res.send('Data posted successfully');
        }
    });
});

//update existing data

router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const newName = req.body.name;
  
    const updateQuery = 'UPDATE type SET name = ? WHERE id = ?';
    const values = [newName, id];
  
    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.log('Error updating data:', err);
        res.status(500).send('Error updating data');
      } else {
        res.send('Data updated successfully');
      }
    });
  });

  //delete existing data

  router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
  
    const deleteQuery = 'DELETE FROM type WHERE id = ?';
    const values = [id];
  
    db.query(deleteQuery, values, (err, result) => {
      if (err) {
        console.log('Error deleting data:', err);
        res.status(500).send('Error deleting data');
      } else {
        res.send('Data deleted successfully');
      }
    });
  });
  


module.exports = router;
