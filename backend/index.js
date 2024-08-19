const express = require('express');
const sequelize = require('./models');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

  
// Use the auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const bookRoutes = require('./routes/bookRoutes'); // Adjust the path as necessary
app.use('/api/books', bookRoutes);


sequelize.sync() //check if the sequelize is syncing or not
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((error) => {
    console.error("Error syncing the database: ", error);
  });

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
