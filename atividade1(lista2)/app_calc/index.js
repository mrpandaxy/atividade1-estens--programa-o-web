const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', calculadoraRoutes);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});