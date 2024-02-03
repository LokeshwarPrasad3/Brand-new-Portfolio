import fs from 'fs';
import path from 'path';

function getAllImageFiles(directory) {
    const files = fs.readdirSync(directory);
    const imageFiles = files.filter(file => {
        const filePath = path.join(directory, file);
        return fs.statSync(filePath).isFile() && /\.(jpg|jpeg|png|gif|bmp)$/i.test(filePath);
    });

    return imageFiles;
}

// Specify the directory path
const directoryPath = './public/projects';

// Get image files
const imageFiles = getAllImageFiles(directoryPath);

// Print the array of image file names
console.log('Image Files:', imageFiles);
