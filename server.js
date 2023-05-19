const express = require('express');
const app = express();
const routes = require('./typeuser');
 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  