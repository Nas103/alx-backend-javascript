#!/usr/bin/env node
/*employee function*/
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
