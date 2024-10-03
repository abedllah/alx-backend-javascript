import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const students = data.trim().split('\n').slice(1);
    const result = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstName);
    });

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
