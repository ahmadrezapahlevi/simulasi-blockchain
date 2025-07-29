import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware & Template
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(expressLayouts);

// Routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});