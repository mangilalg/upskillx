import express from 'express';
import session from 'express-session';  
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import 'dotenv/config';
import './config/passport.js'; 


import ConnectDB from './config/dbconfig.js';
import authmiddleware from './middleware/authmiddleware.js';


import UserRouter from './routes/userroute.js';
import CourseRouter from './routes/courserouter.js';
import EnrollRouter from './routes/EnrollRoute.js';

const app = express();


app.use(session({
  secret: process.env.GOOGLE_CLIENT_SECRET,
  resave: false,
  saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json());


ConnectDB();


app.get('/', (req, res) => {
  res.json('Welcome to APIs.........');
});


app.use('/api/user', UserRouter);
app.use('/api/course', authmiddleware, CourseRouter);
app.use('/api/Enroll', authmiddleware, EnrollRouter);


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
