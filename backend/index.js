const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connectDatabase = require('./config/database'); // Import database connection
const upload = require('./config/multer'); // Import multer configuration

const app = express();

app.use(express.json());
app.use(cors());

// Use the auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

const bookRoutes = require('./routes/bookRoutes'); 
app.use('/api/books', bookRoutes(upload));

// Database connection
connectDatabase();

// Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
