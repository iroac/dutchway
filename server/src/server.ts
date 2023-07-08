import express, { Request, Response } from 'express';
import cors  from 'cors'; // pass reqs to client localhost
const app = express(); 
const wordsRoutes = require('./routes/wordsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const postsRoutes = require('./routes/postsRoutes')
const videosRoutes = require('./routes/videosRoutes')

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3003', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));
app.use('/api', wordsRoutes, usersRoutes, postsRoutes, videosRoutes)

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     