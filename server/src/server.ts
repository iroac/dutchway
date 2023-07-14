import express, { NextFunction, Request, Response } from 'express';
import cors  from 'cors'; // pass reqs to client localhost
const wordsRoutes = require('./routes/wordsRoutes')
const usersRoutes = require('./routes/usersRoutes')  
const postsRoutes = require('./routes/postsRoutes')
const videosRoutes = require('./routes/videosRoutes') 
const authRoutes = require('./routes/authRoutes')   
const cookieParser = require('cookie-parser'); 
const app = express(); 
 
// Middlewares             
app.use(cookieParser());   
app.use(express.json());  
app.use(express.urlencoded({extended: true}))
app.use(cors({ origin: 'http://localhost:3000', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));

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