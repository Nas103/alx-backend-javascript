// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];

    try {
      const { studentCount, students } = await readDatabase(dbPath);
      let response = 'This is the list of our students\n';
      response += `Number of students: ${studentCount}\n`;

      Object.keys(students)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'accent' }))
        .forEach((field) => {
          response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const dbPath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const { students } = await readDatabase(dbPath);
      const studentList = students[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
