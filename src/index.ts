import express from 'express';
import apicache from 'apicache';
import MainRout from './routes/index';
import ImagesRoute from './routes/images';
const PORT = 3000;
const app = express();

// routes setup
app.use('/api', MainRout);
app.use('/api/images', ImagesRoute);

// add apicache middleware for chacheing
const cache = apicache.middleware;
//caching all routes for 5 minutes
app.use(cache('5 minutes'));

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
