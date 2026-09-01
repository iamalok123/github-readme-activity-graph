import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { Handlers } from './handlers';

const app: Application = express();
const port = process.env.PORT || 5100;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Serve static frontend assets
app.use(express.static(path.resolve(process.cwd())));

const handlers = new Handlers();

app.get('/', handlers.getRoot);
// Get Graph
app.get('/graph', handlers.getGraph);
app.get('/api/graph', handlers.getGraph);

// Get Data
app.get('/data', handlers.getData);
app.get('/api/data', handlers.getData);

if (!process.env.VERCEL) {
    app.listen(port, (): void => {
        console.log(`Server is Running on Port ${port}`);
    });
}

export default app;
