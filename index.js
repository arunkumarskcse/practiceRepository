
require('dotenv').config()

// require('dotenv').config({ path: './.env' });

const server = require('./config/server');

// const PORT = 3000;
const port=process.env.DB_PORT
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
