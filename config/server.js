// const express = require('express');
// const app = express();
// const port = process.env.DB_PORT;

// Define routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// exports.module=app



const express = require('express');
const app = require('../controller/app');

const server = express();

server.use('/', app);

module.exports = server;
