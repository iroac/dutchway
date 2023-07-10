// App Import 
import express, { NextFunction, Request, Response } from 'express';
import cors  from 'cors'; // pass reqs to client localhost
const app = express(); 

// Login Import
import passport from 'passport';
import session from 'express-session'
import connection from './config/dbconfig';
import { strategy } from './config/passport';
const MySQLStore = require('express-mysql-session')(session)

// Routes Import
const wordsRoutes = require('./routes/wordsRoutes')
const usersRoutes = require('./routes/usersRoutes')  
const postsRoutes = require('./routes/postsRoutes')
const videosRoutes = require('./routes/videosRoutes')
const authRoutes = require('./routes/authRoutes')

// Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({ origin: 'http://localhost:3004', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));
     
 
// Session and Passport Middlewares
app.use(session({
  secret: 'aawiuhfawufhawhfaw',
  store: new MySQLStore({
    host: 'localhost',
    user: 'root',
    password: 'Joao1852@',
    database: 'dutchapp_db'
  }),
  resave: false, 
  saveUninitialized: false,
  cookie:{
    maxAge:1000*60*60*24
  }
}))
app.use(passport.initialize()) 
app.use(passport.session())
passport.use(strategy); 
passport.serializeUser((user: any, done: any) => {console.log("inside serialize");done(null, user.id);});
passport.deserializeUser(function(userId: any,done: any){console.log('deserializeUser'+ userId); connection.query('SELECT * FROM users where id = ?',[userId], function(error, results) {done(null, results[0]);});});
 

app.use('/api', wordsRoutes, usersRoutes, postsRoutes, videosRoutes, authRoutes)
// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;
  res.status(statusCode).send(message);
});

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     