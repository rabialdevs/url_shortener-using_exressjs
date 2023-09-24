const express = require('express')
const app = express();
const PORT = 8000;
const urlRoute = require('./routes/url')
const connectDB = require('./config/db')
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use('/', urlRoute);
