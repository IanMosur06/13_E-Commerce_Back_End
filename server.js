const express = require('express');
const routes = require('./routes');
const sequelize = require('sequelize');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sequelize synced to the database, Turn server on
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT} at http://localhost:${PORT}!`));
});
