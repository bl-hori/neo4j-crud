import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { neo4jSession } from './middleware/neo4jSession';
import routers from './routes';

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(cors());
app.use(neo4jSession);
app.use(routers);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
