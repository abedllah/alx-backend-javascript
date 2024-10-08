const express = require('express');
const students = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
});

app.get('/students', (req, res) => {
    res.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      res.end();
    });
  });

app.listen(1245, () => {
  console.log('listening on http://localhost:1245')
});

module.exports = app;