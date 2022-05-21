import { resize, isValideExt,OutputObject } from '../../lib/image';
import path from "path";

describe('Image module Test', () => {
  describe('isValideExt function test', () => {
    it('test exist ext', () => {
      const path = '/dist/amr.jpeg';
      expect(isValideExt(path)).toBeTruthy();
    });
    it('test not exist ext', () => {
      const path = '/dist/amr.wav';
      expect(isValideExt(path)).toBeFalsy();
    });
    it('test empty path', () => {
      const path = '';
      expect(isValideExt(path)).toBeFalsy();
    });
  });
  describe('resize function test', () => {
      it('test resolving', async() => {
        const inputPath = path.resolve("./assests/full/palmtunnel.jpg");
        const outputPath = path.resolve("./assests/thump/palmtunnel.jpg");
        await expectAsync(resize(inputPath,300,300,outputPath)).toBeResolved();
    });
    it('test normal use', async() => {
        const inputPath = path.resolve("./assests/full/palmtunnel.jpg");
        const outputPath = path.resolve("./assests/thump/palmtunnel.jpg");
        const output:OutputObject = await resize(inputPath,500,500,outputPath);
        expect(output.width === 500 && output.height === 500).toBeTruthy();
    });
    it('test not available ext', async() => {
        const inputPath = path.resolve("./assests/full/palmtunnel.wav");
        const outputPath = path.resolve("./assests/thump/palmtunnel.wav");
        await expectAsync(resize(inputPath,300,300,outputPath)).toBeRejectedWith("Please check the file extension");
    });
    it('test with invalid path', async() => {
        const inputPath = path.resolve("./assests/palmtunnel.jpg");
        const outputPath = path.resolve("./assests/palmtunnel.jpg");
        await expectAsync(resize(inputPath,300,300,outputPath)).toBeRejectedWith("Something went wrong check the input or the output path");
    });
  });
});
