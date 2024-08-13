export default function getStudentsByLocation(students, city) {
  let studentCity = [];
  studentCity = students.filter((element) => element.location === city);
  return studentCity;
}
