import express from 'express';
import path from 'path';
import selectionController from './controllers/selectionController';
import jobs from './selector/jobs';

const { getCurrent } = selectionController;

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

app.use(express.static('views/statics'));

// Activate background jobs
jobs();


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
app.get('/leader', getCurrent);

app.listen(port);
