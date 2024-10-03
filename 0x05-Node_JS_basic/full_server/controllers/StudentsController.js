import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(students).sort(); // Sort fields alphabetically
      fields.forEach((field) => {
        const studentNames = students[field];
        responseText += `Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}\n`;
      });

      response.status(200).send(responseText.trim());
    } catch (error) {
        response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentNames = students[major] || [];
      response.status(200).send(`List: ${studentNames.join(', ')}`);
    } catch (error) {
        response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
