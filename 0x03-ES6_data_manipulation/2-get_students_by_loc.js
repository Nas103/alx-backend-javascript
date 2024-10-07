#!/usr/bin/env node
//returns an array of objects who are located in a specific city.
export default function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}
