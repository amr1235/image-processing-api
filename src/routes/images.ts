import express from 'express';
import { resize } from '../lib/image';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('images route test');
  }
);

export default images;
