# Image Processing API
A simple API which allows you to place images into your frontend with the size set via URL parameters for rapid prototyping.It also can be used as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site.

## Code Quality and Architecture
This project was built using industry best practices to ensure that the code is as scalable as the architecture.The project uses TypeScript, Unit testing using Jasmine, linting using ESlint, and formatting using Prettier to make sure that the code is not only easy to read but is maintainable, less error-prone, and easier to debug.

## Getting Started
1. Install dependencies.
```sh
> npm install
```
2. Build the project 
```sh
> npm run build
```
3. Run the server 
```sh
> npm start
```
## End Points
Route | Query Parameters | description
---|---|---
/api | None | main route for the API
/api/images | filename={image_name:string},width={desired_width:number},{desired_height:number} |resize the image to new width and height.<br> **note**: The image should be placed to the  assets/full directory.The output image will be stored in the assets/thump directory.

