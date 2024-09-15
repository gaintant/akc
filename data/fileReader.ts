// utils/fileHelper.js
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'list.json');

// Read the list from the JSON file
export const readList = async () => {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
};

// Write the updated list back to the JSON file
export const writeList = async (list) => {
    await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');
};
