// full_server/utils.js
import fs from 'fs';
import csv from 'csv-parser';

export const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    const students = {};
    let studentCount = 0;

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        if (Object.values(row).some(value => value)) {
          studentCount++;
          const field = row.field;
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(row.firstname);
        }
      })
      .on('end', () => {
        if (studentCount === 0) {
          reject(new Error('Cannot load the database'));
        } else {
          resolve({ studentCount, students });
        }
      })
      .on('error', (err) => {
        reject(new Error('Cannot load the database'));
      });
  });
};
