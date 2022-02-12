import MongoConnect from '../Database/Connections/connect';
import routes from '../Routes/index';
import express from 'express';

MongoConnect();

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5555, () => console.log('Server is running on port 5555'));

export { app };
