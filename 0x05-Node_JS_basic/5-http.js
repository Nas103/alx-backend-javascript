const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read the CSV file asynchronously and parse student data
const countStudents = (databasePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // Remove the header
      const studentFields = {};

      students.forEach((student) => {
        const studentData = student.split(',');
        const field = studentData[3]; // Assuming the 4th column is the field

        if (!studentFields[field]) {
          studentFields[field] = [];
        }
        studentFields[field].push(studentData[0]); // Assuming the 1st column is the name
      });

      resolve({ studentFields, totalStudents: students.length });
    });
  });
};

// Create an HTTP server
const app = http.createServer((req, res) => {
  const urlPath = req.url;
  const databasePath = process.argv[2]; // Get the database file path from the command line argument

  res.statusCode = 200; // HTTP Status Code: 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text

  if (urlPath === '/') {
    res.end('Hello Holberton School!\n');
  } else if (urlPath === '/students') {
    if (!databasePath) {
      res.statusCode = 400;
      res.end('Database path is missing\n');
      return;
    }

    countStudents(databasePath)
      .then(({ studentFields, totalStudents }) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudents}\n`);
        Object.keys(studentFields).forEach((field) => {
          res.write(`Number of students in ${field}: ${studentFields[field].length}. List: ${studentFields[field].join(', ')}\n`);
        });
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the server as the variable 'app'
module.exports = app;
