const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const PORT = 8000;
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRouter=require('./routes/user')
const connectDB = require('./config/db')
const path = require('path')
const cookieParser = require('cookie-parser');
connectDB();
const {restrictedLoginToUserOnly,cheakAuth}=require('./middlewares/auth')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.set(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))
app.use('/url',restrictedLoginToUserOnly, urlRoute);
app.use('/',cheakAuth, staticRoute);
app.use('/user', userRouter);



