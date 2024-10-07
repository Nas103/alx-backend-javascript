#!/usr/bin/env node
// that returns the sum of all the student ids.
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
