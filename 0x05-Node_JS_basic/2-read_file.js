const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8'); // Read the file synchronously

    // Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Parse the CSV into an array of students (excluding header)
    const students = lines.slice(1).map(line => {
      const [firstname, lastname, age, field] = line.split(',');
      return { firstname, field };
    });

    // Get the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Group students by field
    const fields = students.reduce((acc, { firstname, field }) => {
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstname);
      return acc;
    }, {});

    // Log the number of students in each field and the list of their names
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
