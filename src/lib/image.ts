import sharp from 'sharp';

export interface OutputObject {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
}; // from sharp documentation

export const isValideExt = (filePath: string): boolean => {
  const available: string[] = [
    'jpeg',
    'jpg',
    'png',
    'webp',
    'avif',
    'gif',
    'svg',
    'tiff',
  ]; // from sharp documentation
  const ext = filePath.split('.').pop() as string;
  if (available.includes(ext)) {
    return true;
  }
  return false;
};

export const resize = (
  filePath: string,
  desiredHeight: number,
  desiredWidth: number,
  outFilePath: string
): Promise<OutputObject> => {
  return new Promise((res, rej) => {
    if (!isValideExt(filePath) || !isValideExt(outFilePath)) {
      rej('Please check the file extension');
    }
    sharp(filePath)
      .resize({ height: desiredHeight, width: desiredWidth })
      .toFile(outFilePath)
      .then((info) => {
        res(info);
      })
      .catch(() => {
        rej('Something went wrong check the input or the output path');
      });
  });
};
