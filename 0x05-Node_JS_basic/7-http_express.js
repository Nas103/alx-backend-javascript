const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

// Function to count students from a CSV file
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    const students = {};
    let studentCount = 0;

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        // Skip empty rows
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

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  const dbPath = process.argv[2]; // Get the CSV path from the command line argument

  if (!dbPath) {
    res.status(400).send('Database file path is missing');
    return;
  }

  countStudents(dbPath)
    .then(({ studentCount, students }) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${studentCount}\n`;

      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.send(response.trim());
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Set the app to listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable for testing or further use
module.exports = app;
