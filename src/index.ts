import express from 'express';
import MainRout from './routes/index';
import ImagesRoute from './routes/images';

const PORT = 3000;
const app = express();

// routes setup
app.use('/api', MainRout);
app.use('/api/images', ImagesRoute);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
