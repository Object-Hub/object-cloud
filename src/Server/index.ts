import express, { Request, Response } from 'express';
import routes from '../Routes/index';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World!');
});

app.listen(5555, () => console.log('Server is running on port 5555'));

export default app;
