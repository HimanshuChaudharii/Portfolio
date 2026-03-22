require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// Connect to MongoDB
if (process.env.MONGO_URI) {
    connectDB();
} else {
    console.warn('MONGO_URI is missing. Database connection skipped.');
}


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
