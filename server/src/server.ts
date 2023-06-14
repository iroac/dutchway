import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

const port = 3008;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});