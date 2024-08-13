export default function getStudentIdsSum(students) {
  const sum = students.reduce((total, element) => total + element.id, 0);
  return sum;
}
