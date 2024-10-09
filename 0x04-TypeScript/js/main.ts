interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = { firstName: 'John', lastName: 'Doe', age: 22, location: 'New York' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 21, location: 'San Francisco' };

const studentsList: Student[] = [student1, student2];
const body = document.querySelector('body');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
