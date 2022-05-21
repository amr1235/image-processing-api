import express from 'express';
import path from 'path';
import { resize } from '../lib/image';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    // get the parameters in the query string
    const fileName: string = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    // check if there any missing parameters
    if (!fileName || !width || !height) {
      //client error
      res.status(400).send(`<h1>Missing or Inavlid Parameters</h1></br>
        please make sure you enter the parameters as follows : ?filename={file_name:string}&width={width:number}&height={height:number}`);
      return;
    }
    const inputImage =
      path.resolve('./assests/full/') + '/' + fileName + '.jpg';
    const outputImage =
      path.resolve('./assests/thump/') + '/' + fileName + '.jpg';
    // resize the image
    try {
      await resize(inputImage, width, height, outputImage);
      res.status(200).sendFile(outputImage);
      return;
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default images;
